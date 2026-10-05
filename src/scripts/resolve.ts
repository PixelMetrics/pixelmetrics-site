// Resolve in: content never fades. It arrives coarse to fine, one cell, then
// four, then sixteen, 90ms per step, then the veil is gone.

import { TONES, hash } from './pixels';

const STEP = 90;

function veil(el: HTMLElement) {
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
  const c = document.createElement('canvas');
  c.className = 'resolve-veil';
  c.setAttribute('aria-hidden', 'true');
  el.appendChild(c);
  el.classList.add('is-resolved');

  const w = el.clientWidth, h = el.clientHeight;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
  const ctx = c.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const root = Math.max(24, Math.min(w, h));

  const paint = (depth: number, keep: number) => {
    ctx.clearRect(0, 0, w, h);
    const s = root / 2 ** depth;
    ctx.strokeStyle = 'rgba(237,234,226,.13)';
    ctx.lineWidth = 1;
    for (let y = 0; y < h; y += s) for (let x = 0; x < w; x += s) {
      const r = hash(Math.round(x), Math.round(y), Math.round(s));
      if (r > keep) continue;
      ctx.fillStyle = TONES[Math.floor(r * 3) % 3];
      ctx.fillRect(x, y, s, s);
      ctx.strokeRect(Math.round(x) + 0.5, Math.round(y) + 0.5, Math.round(s), Math.round(s));
    }
  };

  paint(0, 1);
  setTimeout(() => paint(1, 0.85), STEP);
  setTimeout(() => paint(2, 0.45), STEP * 2);
  setTimeout(() => c.remove(), STEP * 3);
}

const els = document.querySelectorAll<HTMLElement>('[data-resolve]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-resolved'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      veil(e.target as HTMLElement);
    }
  }, { rootMargin: '0px 0px -12% 0px' });
  els.forEach((el) => io.observe(el));
}
