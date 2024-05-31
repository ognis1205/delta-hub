/**
 * @fileoverview Defines utility functions.
 * @copyright Shingo OKAWA 2023
 */
export type ChainedWhen<T, R> = {
  on: <A>(pred: (v: T) => boolean, fn: () => A) => ChainedWhen<T, R | A>;
  otherwise: <A>(fn: () => A) => R | A;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const match = <T, R>(value: any): ChainedWhen<T, R> => ({
  on: <A>(_pred: (v: T) => boolean, _fn: () => A) => match<T, R | A>(value),
  otherwise: <A>(_fn: () => A): A | R => value,
});

const chain = <T, R>(value: T): ChainedWhen<T, R> => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(value) ? match(fn()) : chain<T, A | R>(value),
  otherwise: <A>(fn: () => A) => fn(),
});

export const when = <T>(value: T) => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(value) ? match<T, A>(fn()) : chain<T, A>(value),
});

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
