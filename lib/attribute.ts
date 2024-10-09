import type { Command } from "./types";

/**
 * Creates a command to get the value of a specified attribute from an element.
 * @param qualifiedName - The name of the attribute to retrieve.
 * @returns A command that retrieves the attribute value from the element.
 */
export function getAttr(qualifiedName: string): Command<string | null> {
  return function () {
    return this.getAttribute(qualifiedName);
  };
}

/**
 * Creates a command to set the value of a specified attribute on an element.
 * @param attribute - The name of the attribute to set.
 * @param value - The value to assign to the attribute.
 * @returns A command that sets the attribute value on the element.
 */
export function setAttr(attribute: string, value: any): Command<void> {
  return function () {
    this.setAttribute(attribute, value);
  };
}

/**
 * Creates a command to set multiple attributes on an element.
 * @param attributes - An object containing attribute-value pairs to set.
 * @returns A command that sets multiple attributes on the element.
 */
export function mapSetAttr(attributes: Record<string, string>): Command<void> {
  return function () {
    for (const key in attributes) this.setAttribute(key, attributes[key]);
  };
}

/**
 * Creates a command to remove a specified attribute from an element.
 * @param attribute - The name of the attribute to remove.
 * @returns A command that removes the attribute from the element.
 */
export function removeAttr(attribute: string): Command<void> {
  return function () {
    this.removeAttribute(attribute);
  };
}

/**
 * Creates a command to check if an element has a specified attribute.
 * @param attribute - The name of the attribute to check for.
 * @returns A command that returns true if the attribute exists on the element.
 */
export function hasAttr(attribute: string): Command<boolean> {
  return function () {
    return this.hasAttribute(attribute);
  };
}

/**
 * Creates a command to toggle a specified attribute on an element.
 * @param attribute - The name of the attribute to toggle.
 * @param force - Optional parameter to force adding or removing the attribute.
 * @returns A command that toggles the attribute on the element and returns the new state.
 */
export function toggleAttr(attribute: string, force?: boolean): Command<boolean> {
  return function () {
    return this.toggleAttribute(attribute, force);
  };
}

/**
 * Creates a command to get the value property of an element.
 * @returns A command that retrieves the value of the element if the value property exists.
 */
export function getValue(): Command<string | undefined> {
  return function () {
    return "value" in this ? (this.value as string) : undefined;
  };
}

/**
 * Creates a command to set the value property of an element.
 * @param value - The value to assign to the element.
 * @returns A command that sets the value of the element if the value property exists.
 */
export function setValue(value: any): Command<void> {
  return function () {
    if ("value" in this) this.value = value;
  };
}
