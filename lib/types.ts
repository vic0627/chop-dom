export type DOMs<N extends HTMLElement | Window | Document> =
  N extends HTMLElement ? NodeListOf<N> | N[] : N[];

export type Action<T> = <N extends HTMLElement>(node: N) => T;
