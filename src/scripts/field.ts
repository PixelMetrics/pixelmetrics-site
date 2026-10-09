// The Live Field: a quadtree drawn in hairlines that halves toward attention
// and ends in one lit cell. Ported from Direction D's prototype.
//
// <canvas class="qt" data-...> options:
//   data-live      follows the pointer over its parent; drifts when idle
//   data-root      "full" (one square the size of the canvas) or "h" (rows of squares)
//   data-rows      rows of root squares when root is "h"
//   data-min       smallest cell size in px
//   data-k         subdivision eagerness
//   data-maxd      max depth
//   data-fx/fy     fixed focus (0..1) for static fields
//   data-fillall   tone every cell (motion demo look)
//   data-nolit     never light the deepest cell

import { LIME, TONES, hash } from './pixels';

type Pt = { x: number; y: number };
type Cell = [x: number, y: number, s: number, dep: number];

interface Field {
  el: HTMLCanvasElement;
  live: boolean;
  t: number;
  hover: Pt | null;
  p: Pt | null;
  visible: boolean;
  dirty: boolean;
}

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

const dprOf = () => Math.min(2, window.devicePixelRatio || 1);

function sizeCanvas(el: HTMLCanvasElement, w: number, h: number) {
  const dpr = dprOf();
  const W = Math.round(w * dpr), H = Math.round(h * dpr);
  if (el.width !== W || el.height !== H) { el.width = W; el.height = H; }
  const ctx = el.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

function subdivide(p: Pt, x: number, y: number, s: number, dep: number, min: number, k: number, maxd: number, out: Cell[]) {
  const dx = Math.max(x - p.x, 0, p.x - (x + s));
  const dy = Math.max(y - p.y, 0, p.y - (y + s));
  if (s / 2 >= min && dep < maxd && Math.hypot(dx, dy) < s * k * 0.5) {
    const q = s / 2;
    subdivide(p, x, y, q, dep + 1, min, k, maxd, out);
    subdivide(p, x + q, y, q, dep + 1, min, k, maxd, out);
    subdivide(p, x, y + q, q, dep + 1, min, k, maxd, out);
    subdivide(p, x + q, y + q, q, dep + 1, min, k, maxd, out);
  } else out.push([x, y, s, dep]);
}

const fields: Field[] = [];
const byEl = new WeakMap<Element, Field>();

function updateHandoff() {
  // Only one pixel is lit: while a live field is on screen, the logo's pixel goes dark.
  const lit = fields.some((f) => f.live && f.visible);
  document.documentElement.classList.toggle('field-lit', lit);
}

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const f = byEl.get(e.target);
    if (f) { f.visible = e.isIntersecting; f.dirty = true; }
  }
  updateHandoff();
}, { rootMargin: '80px' });

const ro = new ResizeObserver((entries) => {
  for (const e of entries) { const f = byEl.get(e.target); if (f) f.dirty = true; }
});

function register(el: HTMLCanvasElement) {
  if (byEl.has(el)) return;
  const f: Field = { el, live: el.dataset.live !== undefined, t: Math.random() * 100, hover: null, p: null, visible: false, dirty: true };
  if (f.live && el.parentElement) {
    const target = el.parentElement;
    target.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      f.hover = { x: e.clientX - r.left, y: e.clientY - r.top };
    });
    target.addEventListener('pointerleave', () => { f.hover = null; });
  }
  fields.push(f);
  byEl.set(el, f);
  io.observe(el);
  ro.observe(el);
}

function draw(f: Field) {
  const el = f.el, d = el.dataset;
  const w = el.clientWidth, h = el.clientHeight;
  if (!w || !h) return;
  const ctx = sizeCanvas(el, w, h);

  let p: Pt;
  if (f.live) {
    let tx: number, ty: number;
    if (f.hover) { tx = f.hover.x; ty = f.hover.y; }
    else if (reduceMotion.matches) { tx = w * 0.72; ty = h * 0.38; }
    else {
      f.t += 0.0035;
      tx = w * (0.5 + 0.38 * Math.sin(f.t * 1.3));
      ty = h * (0.45 + 0.36 * Math.sin(f.t * 1.9 + 1));
    }
    if (!f.p) f.p = { x: tx, y: ty };
    const ease = reduceMotion.matches ? 1 : 0.09;
    f.p.x += (tx - f.p.x) * ease; f.p.y += (ty - f.p.y) * ease;
    p = f.p;
  } else {
    p = { x: +(d.fx ?? 0.5) * w, y: +(d.fy ?? 0.5) * h };
  }

  ctx.clearRect(0, 0, w, h);
  const full = d.root === 'full';
  const root = full ? Math.max(w, h) : h / (+(d.rows ?? 0) || 2);
  const min = +(d.min ?? 0) || 6, k = +(d.k ?? 0) || 1.2;
  const maxd = d.maxd ? +d.maxd : 99;
  const fillall = d.fillall !== undefined;

  const cells: Cell[] = [];
  const cols = Math.ceil(w / root), rows = Math.ceil(h / root);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) subdivide(p, c * root, r * root, root, 0, min, k, maxd, cells);

  let best: Cell | null = null;
  for (const c of cells) {
    const [x, y, s, dep] = c;
    if (p.x >= x && p.x < x + s && p.y >= y && p.y < y + s) best = c;
    const r = hash(Math.round(x), Math.round(y), Math.round(s));
    let fill: string | null = null;
    if (fillall) fill = dep === 0 ? TONES[0] : TONES[Math.min(2, Math.floor(r * 3))];
    else {
      const pT = 0.05 + dep * 0.045;
      if (r < pT) fill = TONES[Math.min(2, Math.floor((r / pT) * 3))];
    }
    if (fill) { ctx.fillStyle = fill; ctx.fillRect(x, y, s, s); }
  }

  ctx.strokeStyle = 'rgba(237,234,226,.13)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (const [x, y, s] of cells) ctx.rect(Math.round(x) + 0.5, Math.round(y) + 0.5, Math.round(s), Math.round(s));
  ctx.stroke();

  if (best && (best[3] > 0 || !full) && !fillall && d.nolit === undefined) {
    ctx.fillStyle = LIME;
    ctx.fillRect(best[0], best[1], best[2], best[2]);
  }
}

// ---------- Site-wide cursor field ----------
// A faint halo of squares that resolves around the cursor and blurs out with
// distance and speed. Only the cell under it is lit. Sits on the top layer.

const amb = document.querySelector<HTMLCanvasElement>('.amb');
const ambLime = document.querySelector<HTMLElement>('.amb-lime');
let mouse: Pt | null = null;
let ap: Pt | null = null;
let ambIdle = 0;

window.addEventListener('pointermove', (e) => {
  mouse = e.pointerType === 'mouse' ? { x: e.clientX, y: e.clientY } : null;
}, { passive: true });
document.addEventListener('pointerout', (e) => { if (!e.relatedTarget) mouse = null; });

// Halo radius (px), line strength and how fast the trail clears, per setting.
// Subtle is the site default; it was toned down from the prototype's values.
const AMB = {
  subtle: { R: 120, base: 0.026, fade: 0.2 },
  strong: { R: 300, base: 0.075, fade: 0.14 },
};

function drawAmb() {
  if (!amb) return;
  const mode = (document.body.dataset.cursor ?? 'subtle').toLowerCase();
  const off = mode === 'off' || reduceMotion.matches || !finePointer.matches;
  const m = mouse;
  const blocked = off || !m || fields.some((f) => f.hover);

  // Nothing drawn for a while: skip the per-frame clear entirely.
  if (blocked) { if (ambLime) ambLime.style.opacity = '0'; if (++ambIdle > 40) return; }
  else ambIdle = 0;

  const { R, base, fade } = mode === 'strong' ? AMB.strong : AMB.subtle;
  const w = window.innerWidth, h = window.innerHeight;
  const ctx = sizeCanvas(amb, w, h);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = `rgba(0,0,0,${fade})`;
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'source-over';
  if (blocked || !m) return;

  if (!ap) ap = { x: m.x, y: m.y };
  ap.x += (m.x - ap.x) * 0.22; ap.y += (m.y - ap.y) * 0.22;
  const p = ap;
  const root = 128, min = 5, k = 1.15;
  const oy = -(window.scrollY % root);

  const cells: Cell[] = [];
  const c0 = Math.floor((p.x - R) / root), c1 = Math.floor((p.x + R) / root);
  const r0 = Math.floor((p.y - oy - R) / root), r1 = Math.floor((p.y - oy + R) / root);
  for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) subdivide(p, c * root, r * root + oy, root, 0, min, k, 99, cells);

  let best: Cell | null = null;
  ctx.lineWidth = 1;
  for (const c of cells) {
    const [x, y, s, dep] = c;
    if (p.x >= x && p.x < x + s && p.y >= y && p.y < y + s) best = c;
    const dd = Math.hypot(x + s / 2 - p.x, y + s / 2 - p.y);
    let a = Math.max(0, 1 - dd / R); a = a * a * base;
    if (a < 0.003) continue;
    if (dep > 1 && hash(Math.round(x), Math.round(y - oy), Math.round(s)) < 0.05 + dep * 0.04) {
      ctx.fillStyle = `rgba(237,234,226,${a * 0.5})`; ctx.fillRect(x, y, s, s);
    }
    ctx.strokeStyle = `rgba(237,234,226,${a * 2.2})`;
    ctx.strokeRect(Math.round(x) + 0.5, Math.round(y) + 0.5, Math.round(s), Math.round(s));
  }
  if (ambLime && best) {
    ambLime.style.opacity = '1';
    ambLime.style.transform = `translate(${best[0]}px,${best[1]}px)`;
    ambLime.style.width = best[2] + 'px';
    ambLime.style.height = best[2] + 'px';
  }
}

// ---------- Loop ----------

document.querySelectorAll<HTMLCanvasElement>('canvas.qt').forEach(register);

function loop() {
  for (const f of fields) {
    if (!f.visible) continue;
    if (f.live || f.dirty) { draw(f); f.dirty = false; }
  }
  drawAmb();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
