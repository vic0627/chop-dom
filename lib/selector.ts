import type { Globals, DOMs, Command } from "./types";
import { isEmptyValue } from "./utils/type-check";

/**
 * Selects an existing DOM element(s) or creates a new element based on a selector string,
 * and applies a series of commands (functions) on the element(s). This function can either:
 * - Select an existing DOM element(s) using a CSS selector or create a new DOM element if a string wrapped in `< >` is provided.
 * - Apply multiple `Command` functions to the selected or created element(s).
 *
 * @template D - The type of the DOM element or a global type (e.g., `document`, `window`).
 * @template T - The return type of the `Command` functions being applied.
 *
 * @param selector - A CSS selector string, a new element string (e.g., "<div>"), or an existing `HTMLElement`, `Document`, or `Window`.
 * @param commands - A variadic list of `Command` functions to apply on the selected or created element(s).
 * @returns -
 * - If no `Command` is provided, returns the last element from the selection.
 * - If `Command` functions are provided, returns the result of applying the commands on the selected element(s). The result can be a single value or an array of values depending on the number of elements and commands.
 *
 * @example
 * // Selects an element and sets its innerHTML, then gets the updated innerHTML
 * chop('#myElement', setInnerHtml('Hello World'), getInnerHtml());
 *
 * @example
 * // Creates a new div element and sets its CSS properties
 * chop('<div>', setCss('width', '100px'), setCss('height', '50px'));
 *
 * @example
 * // Appends a string and a node to an element
 * chop('#myElement', append('Some text', chop('<span>')));
 *
 * @throws {TypeError} If the `selector` is not a valid string, `Document`, `Window`, or `HTMLElement`.
 */
export function chop<D extends HTMLElement | Globals>(selector: string | D): D extends string ? HTMLElement : D;
export function chop<D extends HTMLElement | Globals, T>(selector: string | D, ...commands: Command<T>[]): T | T[];
export function chop<D extends HTMLElement | Globals, T>(selector: string | D, ...commands: Command<T>[]): any {
  let doms: DOMs<D>;

  // use as a selector
  if (typeof selector === "string") {
    // create element
    if (selector[0] === "<" && selector[selector.length - 1] === ">") {
      doms = [document.createElement(selector.slice(1, -1))] as DOMs<D>;
    }
    // select existing element
    else {
      doms = document.querySelectorAll<HTMLElement>(selector) as DOMs<D>;
    }
  }
  // use existing element
  else if (selector instanceof HTMLElement || selector === document || selector === window) {
    doms = [selector] as DOMs<D>;
  }
  // invalid target
  else {
    throw new TypeError("selector must be string, Document, Window, or HTMLElement");
  }

  const lastIdx = doms.length - 1;
  if (!commands.length) {
    return doms[lastIdx];
  }

  let result: T | T[] = [];
  for (const command of commands) {
    doms.forEach((dom, i) => {
      try {
        const value = command.apply(dom as HTMLElement, [(result as T[])[i]]);
        if (!isEmptyValue(value)) {
          (result as T[])[i] = value;
        }
      } catch (e) {
        console.error(e);
      }
    });
  }

  result = result.filter((value) => !isEmptyValue(value));

  if (!result.length) {
    result = result[0];
  }

  return result;
}
