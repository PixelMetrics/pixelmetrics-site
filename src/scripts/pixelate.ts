// Pixel in: the site's one pixel effect. A screenshot arrives as coarse
// blocks that halve until the real image is there, 90ms per step, once,
// when it scrolls into view. Wrap an <img> in an element with data-pixelate.
// The canvas copies the image's own crop (object-fit: cover, top-aligned).

const STEP = 90;
const BLOCKS = [48, 24, 12, 6, 3];

function paint(img: HTMLImageElement, c: HTMLCanvasElement, block: number) {
  const w = img.clientWidth, h = img.clientHeight;
  const nw = img.naturalWidth, nh = img.naturalHeight;
  if (!w || !h || !nw || !nh) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
  c.style.width = w + 'px'; c.style.height = h + 'px';

  // Source rectangle matching object-fit: cover with object-position: top.
  const scale = Math.max(w / nw, h / nh);
  const sw = w / scale, sh = h / scale;
  const sx = (nw - sw) / 2, sy = 0;

  const ow = Math.max(1, Math.ceil(w / block)), oh = Math.max(1, Math.ceil(h / block));
  const off = document.createElement('canvas');
  off.width = ow; off.height = oh;
  off.getContext('2d')!.drawImage(img, sx, sy, sw, sh, 0, 0, ow, oh);

  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(off, 0, 0, ow, oh, 0, 0, c.width, c.height);
}

function run(box: HTMLElement) {
  const img = box.querySelector('img');
  if (!img) { box.classList.add('is-pixeled'); return; }
  const start = () => {
    const c = document.createElement('canvas');
    c.className = 'pixel-veil';
    c.setAttribute('aria-hidden', 'true');
    c.style.left = img.offsetLeft + 'px';
    c.style.top = img.offsetTop + 'px';
    box.appendChild(c);
    BLOCKS.forEach((b, i) => setTimeout(() => paint(img, c, b), i * STEP));
    setTimeout(() => { box.classList.add('is-pixeled'); c.remove(); }, BLOCKS.length * STEP);
  };
  if (img.complete && img.naturalWidth) start();
  else {
    img.addEventListener('load', start, { once: true });
    img.addEventListener('error', () => box.classList.add('is-pixeled'), { once: true });
  }
}

const boxes = document.querySelectorAll<HTMLElement>('[data-pixelate]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce || !('IntersectionObserver' in window)) {
  boxes.forEach((b) => b.classList.add('is-pixeled'));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      run(e.target as HTMLElement);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  boxes.forEach((b) => io.observe(b));
}
