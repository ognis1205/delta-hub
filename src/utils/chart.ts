/**
 * @fileoverview Defines chart.js utility functions.
 * @copyright Shingo OKAWA 2023
 */
export type ChainedWhen<T, R> = {
  on: <A>(pred: (v: T) => boolean, fn: () => A) => ChainedWhen<T, R | A>;
  otherwise: <A>(fn: () => A) => R | A;
};

export const hex2rgb = (hex: string): [number, number, number] => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const h = parseInt('0x' + c.join(''), 16);
    return [(h >> 16) & 255, (h >> 8) & 255, h & 255];
  }
  throw new Error('Bad hexadecimal expression');
};
