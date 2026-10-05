// Shared constants for the field and resolve-in effects.
export const LIME = '#C8EE4A';
export const TONES = ['#1C1B18', '#26251F', '#34332C'];

/** Stable pseudo-random 0..1 per cell, so tones don't flicker between frames. */
export const hash = (x: number, y: number, s: number) => {
  const n = Math.sin(x * 12.9898 + y * 78.233 + s * 37.719) * 43758.5453;
  return n - Math.floor(n);
};
