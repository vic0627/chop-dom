import type { DOMs, Action } from "./types";

/**
 * Selects DOM elements and applies actions to them.
 *
 * This function allows you to select one or more DOM elements using a selector and optionally apply a series of actions to them.
 * If no actions are provided, it returns the selected elements.
 *
 * **Usage with Action Factories:**
 *
 * The action factories are functions that create actions to manipulate DOM elements. They are designed to be used with this function to perform various DOM operations such as setting attributes, adding classes, handling events, etc.
 *
 * @param selector - A CSS selector string, an HTML creation string (e.g., '<div>'), or a DOM element (`HTMLElement`, `Document`, or `Window`).
 * @param actions - Optional actions to apply to the selected elements. Each action is a function that operates on an element.
 * @returns
 * - If no actions are provided, returns an array of selected elements.
 * - If actions are provided, returns the result of the first action that returns a non-undefined value.
 * @throws {TypeError} If the selector is not a string, `Document`, `Window`, or `HTMLElement`.
 *
 * @example
 * // Example 1: Selecting elements by CSS selector without actions
 * const elements = $('.my-class');
 * // elements is an array of HTMLElement objects matching '.my-class'
 *
 * @example
 * // Example 2: Selecting elements and applying actions
 * $('button',
 *   setAttr('disabled', 'true'),
 *   addClass('active'),
 *   on('click', () => console.log('Button clicked'))
 * );
 *
 * @example
 * // Example 3: Operating on a specific HTMLElement
 * $('#myElement',
 *   removeClass('hidden'),
 *   setCss('display', 'block')
 * );
 *
 * @example
 * // Example 4: Creating a new element and applying actions
 * $('<div>',
 *   setInnerHtml('<p>Hello World</p>'),
 *   appendTo($('body'))
 * );
 *
 * @see
 * - **Action Factories**: Functions like `setAttr`, `addClass`, `on`, etc., create actions that can be applied to elements.
 * - **Integration**: Use this function in combination with action factories to manipulate the DOM efficiently.
 */
export function $<D extends HTMLElement | Window | Document>(
  selector: string | D
): D extends string ? HTMLElement[] : D[];
export function $<D extends HTMLElement | Window | Document, T>(
  selector: string | D,
  ...actions: Action<T>[]
): T;
export function $<D extends HTMLElement | Window | Document, T>(
  selector: string | D,
  ...actions: Action<T>[]
): any {
  let doms: DOMs<D>;
  if (typeof selector === "string") {
    if (selector[0] === "<" && selector[selector.length - 1] === ">")
      doms = [document.createElement(selector.slice(1, -1))] as DOMs<D>;
    else doms = document.querySelectorAll<HTMLElement>(selector) as DOMs<D>;
  } else if (selector instanceof HTMLElement) doms = [selector] as DOMs<D>;
  else if (
    selector === document ||
    (selector as Window & typeof globalThis) === window
  )
    doms = [selector] as DOMs<D>;
  else
    throw new TypeError(
      "selector must be string, Document, Window, or HTMLElement"
    );

  if (!actions.length) return doms[0];

  let result!: T;
  for (const action of actions)
    for (const dom of doms)
      try {
        const tmp = action(dom as HTMLElement);
        if (tmp === dom) result = tmp;
        else result ??= tmp;
      } catch (e) {
        console.error(e);
      }
  if (result === undefined) result = doms[0] as T;

  return result;
}
