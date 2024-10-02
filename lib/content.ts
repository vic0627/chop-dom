import type { Action } from "./types";

/**
 * Creates an action to get the inner HTML content of an element.
 * @returns An action that retrieves the innerHTML of an element.
 */
export const getInnerHtml =
  (): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    node.innerHTML;

/**
 * Creates an action to set the inner HTML content of an element.
 * @param html - The HTML string to set as the element's innerHTML.
 * @returns An action that sets the innerHTML of an element.
 */
export const setInnerHtml =
  (html: string): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    (node.innerHTML = html);

/**
 * Creates an action to get the outer HTML of an element, including the element itself.
 * @returns An action that retrieves the outerHTML of an element.
 */
export const getOuterHtml =
  (): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    node.outerHTML;

/**
 * Creates an action to set the outer HTML of an element, replacing the element and its contents.
 * @param html - The HTML string to replace the element with.
 * @returns An action that sets the outerHTML of an element.
 */
export const setOuterHtml =
  (html: string): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    (node.outerHTML = html);

/**
 * Creates an action to get the inner text content of an element.
 * @returns An action that retrieves the innerText of an element.
 */
export const getInnerText =
  (): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    node.innerText;

/**
 * Creates an action to set the inner text content of an element.
 * @param html - The text string to set as the element's innerText.
 * @returns An action that sets the innerText of an element.
 */
export const setInnerText =
  (html: string): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    (node.innerText = html);

/**
 * Creates an action to get the outer text of an element, including the text of the element itself.
 * @returns An action that retrieves the outerText of an element.
 */
export const getOuterText =
  (): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    node.outerText;

/**
 * Creates an action to set the outer text of an element, replacing the element and its contents.
 * @param html - The text string to replace the element with.
 * @returns An action that sets the outerText of an element.
 */
export const setOuterText =
  (html: string): Action<string> =>
  <N extends HTMLElement>(node: N) =>
    (node.outerText = html);
