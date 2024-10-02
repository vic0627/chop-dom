import type { Action } from "./types";

/**
 * Creates an action to get the value of a specified attribute from an element.
 * @param attribute - The name of the attribute to retrieve.
 * @returns An action that retrieves the attribute value from an element.
 */
export const getAttr =
  (attribute: string): Action<string | null> =>
  <E extends HTMLElement>(node: E) =>
    node.getAttribute(attribute);

/**
 * Creates an action to set the value of a specified attribute on an element.
 * @param attribute - The name of the attribute to set.
 * @param value - The value to assign to the attribute.
 * @returns An action that sets the attribute value on an element.
 */
export const setAttr =
  (attribute: string, value: any): Action<void> =>
  <E extends HTMLElement>(node: E) =>
    node.setAttribute(attribute, value);

/**
 * Creates an action to set multiple attributes on an element.
 * @param pair - An object containing attribute-value pairs to set.
 * @returns An action that sets multiple attributes on an element.
 */
export const mapSetAttr =
  (pair: Record<string, string>): Action<void> =>
  <E extends HTMLElement>(node: E) => {
    for (const key in pair) node.setAttribute(key, pair[key]);
  };

/**
 * Creates an action to remove a specified attribute from an element.
 * @param attribute - The name of the attribute to remove.
 * @returns An action that removes the attribute from an element.
 */
export const removeAttr =
  (attribute: string): Action<void> =>
  <E extends HTMLElement>(node: E) =>
    node.removeAttribute(attribute);

/**
 * Creates an action to check if an element has a specified attribute.
 * @param attribute - The name of the attribute to check for.
 * @returns An action that returns true if the attribute exists on the element.
 */
export const hasAttr =
  (attribute: string): Action<boolean> =>
  <E extends HTMLElement>(node: E) =>
    node.hasAttribute(attribute);

/**
 * Creates an action to toggle a specified attribute on an element.
 * @param attribute - The name of the attribute to toggle.
 * @param force - Optional parameter to force adding or removing the attribute.
 * @returns An action that toggles the attribute on an element.
 */
export const toggleAttr =
  (attribute: string, force?: boolean): Action<boolean> =>
  <E extends HTMLElement>(node: E) =>
    node.toggleAttribute(attribute, force);

/**
 * Creates an action to get the value property of an element.
 * @returns An action that retrieves the value of an element if it exists.
 */
export const getValue =
  (): Action<string | undefined> =>
  <E extends HTMLElement>(node: E) =>
    "value" in node ? (node.value as string) : void 0;

/**
 * Creates an action to set the value property of an element.
 * @param value - The value to assign to the element.
 * @returns An action that sets the value of an element if possible.
 */
export const setValue =
  (value: any): Action<void> =>
  <E extends HTMLElement>(node: E) => {
    "value" in node && (node.value = value);
  };
