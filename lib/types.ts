export type Globals = (Window & typeof globalThis) | Document;

export type DOMs<N extends string | HTMLElement | Globals> = N extends string
  ? NodeListOf<HTMLElement> | HTMLElement[]
  : N[];

export type Command<T> = <N extends HTMLElement, V>(node: N, value: V) => T;

export type ExcludeEmpty<T> = T extends null | undefined | void ? never : T;

export type ReturnsBySelector<S, T> = S extends `#${string}` | `<${string}>` ? ExcludeEmpty<T> : ExcludeEmpty<T> | ExcludeEmpty<T>[]

export type ReturnsByCommands<S, T> = ReturnsBySelector<S, T | HTMLElement>;