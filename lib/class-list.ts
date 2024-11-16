import type { Command, Void } from "./types";

/**
 * Creates a command to check if an element's class list contains a specified token.
 * @param token - The class name to check for.
 * @returns A command that returns true if the class exists on the element.
 */
export function hasClass(token: string): Command<boolean> {
  return function (node) {
    return node.classList.contains(token);
  };
}

/**
 * Creates a command to add one or more class tokens to an element's class list.
 * @param token - One or more class names to add.
 * @returns A command that adds the specified classes to the element.
 */
export function addClass(...token: string[]): Command<Void> {
  return function (node) {
    node.classList.add(...token);
  };
}

/**
 * Creates a command to remove one or more class tokens from an element's class list.
 * @param token - One or more class names to remove.
 * @returns A command that removes the specified classes from the element.
 */
export function removeClass(...token: string[]): Command<Void> {
  return function (node) {
    node.classList.remove(...token);
  };
}

/**
 * Creates a command to toggle a class token on an element's class list.
 * @param token - The class name to toggle.
 * @param force - Optional parameter to force adding or removing the class.
 * @returns A command that toggles the class on the element and returns the updated state.
 */
export function toggleClass(token: string, force?: boolean): Command<boolean> {
  return function (node) {
    return node.classList.toggle(token, force);
  };
}

/**
 * Creates a command to replace an existing class token with a new one in an element's class list.
 * @param token - The existing class name to replace.
 * @param newToken - The new class name to use as a replacement.
 * @returns A command that replaces the old class with the new one on the element and returns true if the class was replaced.
 */
export function replaceClass(token: string, newToken: string): Command<boolean> {
  return function (node) {
    return node.classList.replace(token, newToken);
  };
}
