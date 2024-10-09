export type Globals = (Window & typeof globalThis) | Document;

export type DOMs<N extends HTMLElement | Globals> =
  N extends HTMLElement ? NodeListOf<N> | N[] : N[];

export type Action<T> = <N extends HTMLElement>(node: N) => T;

export type Command<T> = <N extends HTMLElement, V>(this: N, value: V) => T;
