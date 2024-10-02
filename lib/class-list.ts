import type { Action } from "./types";

/**
 * Creates an action to check if an element's class list contains a specified token.
 * @param token - The class name to check for.
 * @returns An action that returns true if the class exists on the element.
 */
export const hasClass =
  (token: string): Action<boolean> =>
  <E extends HTMLElement>(node: E) =>
    node.classList.contains(token);

/**
 * Creates an action to add one or more class tokens to an element's class list.
 * @param token - An array of class names to add.
 * @returns An action that adds the specified classes to the element.
 */
export const addClass =
  (...token: string[]): Action<void> =>
  <E extends HTMLElement>(node: E) => {
    node.classList.add(...token);
  };

/**
 * Creates an action to remove one or more class tokens from an element's class list.
 * @param token - An array of class names to remove.
 * @returns An action that removes the specified classes from the element.
 */
export const removeClass =
  (...token: string[]): Action<void> =>
  <E extends HTMLElement>(node: E) => {
    node.classList.remove(...token);
  };

/**
 * Creates an action to toggle a class token on an element's class list.
 * @param token - The class name to toggle.
 * @param force - Optional parameter to force adding or removing the class.
 * @returns An action that toggles the class on the element.
 */
export const toggleClass =
  (token: string, force?: boolean): Action<boolean> =>
  <E extends HTMLElement>(node: E) =>
    node.classList.toggle(token, force);

/**
 * Creates an action to replace an existing class token with a new one in an element's class list.
 * @param token - The existing class name to replace.
 * @param newToken - The new class name to use as a replacement.
 * @returns An action that replaces the class on the element.
 */
export const replaceClass =
  (token: string, newToken: string): Action<boolean> =>
  <E extends HTMLElement>(node: E) =>
    node.classList.replace(token, newToken);
