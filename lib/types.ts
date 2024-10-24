export type Globals = (Window & typeof globalThis) | Document;

export type DOMs<N extends string | HTMLElement | Globals> = N extends string
  ? NodeListOf<HTMLElement> | HTMLElement[]
  : N[];

export type Command<T> = <N extends HTMLElement, V>(node: N, value: V) => T;

/** @todo */
type ExcludeReturns<T> = T extends undefined | void | null ? HTMLElement : T

export type CommandChainReturns<T, S> = S extends `#${string}` | `<${string}>`
  ? ExcludeReturns<T>
  : ExcludeReturns<T> | ExcludeReturns<T>[];
