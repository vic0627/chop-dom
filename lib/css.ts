import type { Action } from "./types";

/**
 * Creates an action to get the computed value of a CSS property from an element.
 * @param property - The CSS property name to retrieve.
 * @returns An action that retrieves the computed style value from an element.
 */
export const getCss =
  (property: string): Action<string | null> =>
  <N extends HTMLElement>(node: N) =>
    getComputedStyle(node).getPropertyValue(property);

/**
 * Creates an action to set a CSS property on an element.
 * @param property - The CSS property name to set.
 * @param value - The value to assign to the CSS property.
 * @returns An action that sets the CSS property on an element.
 */
export const setCss =
  (property: string, value: string): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.style.setProperty(property, value);

/**
 * Creates an action to set multiple CSS properties on an element.
 * @param properties - An object containing CSS property-value pairs to set.
 * @returns An action that sets multiple CSS properties on an element.
 */
export const mapSetCss =
  (properties: Record<string, string>): Action<void> =>
  <N extends HTMLElement>(node: N) => {
    for (const key in properties) node.style.setProperty(key, properties[key]);
  };

/**
 * Creates an action to get the width of an element in pixels.
 * @returns An action that retrieves the width of an element.
 */
export const getWidth =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.getBoundingClientRect().width;

/**
 * Creates an action to set the width of an element.
 * @param value - The width value to set, either as a number (pixels) or a string (with units).
 * @returns An action that sets the width of an element.
 */
export const setWidth =
  (value: string | number): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    (node.style.width = typeof value === "number" ? `${value}px` : value);

/**
 * Creates an action to get the height of an element in pixels.
 * @returns An action that retrieves the height of an element.
 */
export const getHeight =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.getBoundingClientRect().height;

/**
 * Creates an action to set the height of an element.
 * @param value - The height value to set, either as a number (pixels) or a string (with units).
 * @returns An action that sets the height of an element.
 */
export const setHeight =
  (value: string | number): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    (node.style.height = typeof value === "number" ? `${value}px` : value);

/**
 * Creates an action to get the inner width of an element, including padding but excluding borders and margins.
 * @returns An action that retrieves the clientWidth of an element.
 */
export const getInnerWidth =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.clientWidth;

/**
 * Creates an action to get the inner height of an element, including padding but excluding borders and margins.
 * @returns An action that retrieves the clientHeight of an element.
 */
export const getInnerHeight =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.clientHeight;

/**
 * Creates an action to get the outer width of an element, including borders and optionally margins.
 * @param includeMargin - Whether to include margins in the calculation (default is false).
 * @returns An action that retrieves the offsetWidth of an element, optionally including margins.
 */
export const getOuterWidth =
  (includeMargin: boolean = false): Action<number> =>
  <N extends HTMLElement>(node: N) => {
    let width = node.offsetWidth;
    if (includeMargin) {
      const style = getComputedStyle(node);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    return width;
  };

/**
 * Creates an action to get the outer height of an element, including borders and optionally margins.
 * @param includeMargin - Whether to include margins in the calculation (default is false).
 * @returns An action that retrieves the offsetHeight of an element, optionally including margins.
 */
export const getOuterHeight =
  (includeMargin: boolean = false): Action<number> =>
  <N extends HTMLElement>(node: N) => {
    let height = node.offsetHeight;
    if (includeMargin) {
      const style = getComputedStyle(node);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    return height;
  };

/**
 * Creates an action to get the offset position of an element relative to the document.
 * @returns An action that retrieves the top and left offset of an element.
 */
export const getOffset =
  (): Action<{ top: number; left: number }> =>
  <N extends HTMLElement>(node: N) => {
    const rect = node.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    };
  };

/**
 * Creates an action to get the horizontal scroll position of an element.
 * @returns An action that retrieves the scrollLeft value of an element.
 */
export const getScrollLeft =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.scrollLeft;

/**
 * Creates an action to set the horizontal scroll position of an element.
 * @param value - The scroll position to set.
 * @returns An action that sets the scrollLeft value of an element.
 */
export const setScrollLeft =
  (value: number): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    (node.scrollLeft = value);

/**
 * Creates an action to get the vertical scroll position of an element.
 * @returns An action that retrieves the scrollTop value of an element.
 */
export const getScrollTop =
  (): Action<number> =>
  <N extends HTMLElement>(node: N) =>
    node.scrollTop;

/**
 * Creates an action to set the vertical scroll position of an element.
 * @param value - The scroll position to set.
 * @returns An action that sets the scrollTop value of an element.
 */
export const setScrollTop =
  (value: number): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    (node.scrollTop = value);
