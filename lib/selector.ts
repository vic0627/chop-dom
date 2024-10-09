import type { Globals, DOMs, Action, Command } from "./types";

export function $<D extends HTMLElement | Globals>(selector: string | D): D extends string ? HTMLElement[] : D;
export function $<D extends HTMLElement | Globals, T>(selector: string | D, ...commands: Command<T>[]): T;
export function $<D extends HTMLElement | Globals, T>(selector: string | D, ...commands: Command<T>[]): any {
  let doms: DOMs<D>;
  if (typeof selector === "string") {
    if (selector[0] === "<" && selector[selector.length - 1] === ">")
      doms = [document.createElement(selector.slice(1, -1))] as DOMs<D>;
    else doms = document.querySelectorAll<HTMLElement>(selector) as DOMs<D>;
  } else if (selector instanceof HTMLElement) doms = [selector] as DOMs<D>;
  else if (selector === document || selector === window) doms = [selector] as DOMs<D>;
  else throw new TypeError("selector must be string, Document, Window, or HTMLElement");

  if (!commands.length) return doms[0];

  let result!: T;
  for (const command of commands)
    for (const dom of doms)
      try {
        const tmp = command.apply(dom as HTMLElement, result);
        if (tmp === dom) result = tmp;
        else result ??= tmp;
      } catch (e) {
        console.error(e);
      }
  if (result === undefined) result = doms[0] as T;

  return result;
}
