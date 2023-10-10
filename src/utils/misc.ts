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
  otherwise: <A>(_fn: () => A): A | R => value
});

const chain = <T, R>(value: T): ChainedWhen<T, R> => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(value) ? match(fn()) : chain<T, A | R>(value),
  otherwise: <A>(fn: () => A) => fn()
});

export const when = <T>(value: T) => ({
  on: <A>(pred: (v: T) => boolean, fn: () => A) =>
    pred(value) ? match<T, A>(fn()) : chain<T, A>(value)
});
