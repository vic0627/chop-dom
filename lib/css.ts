import type { Command } from "./types";

/**
 * Creates a command to get the computed value of a CSS property from an element.
 * @param property - The CSS property name to retrieve.
 * @returns A command that retrieves the computed style value from the element.
 */
export function getCss(property: string): Command<string | null> {
  return function () {
    return getComputedStyle(this).getPropertyValue(property);
  };
}

/**
 * Creates a command to set a CSS property on an element.
 * @param property - The CSS property name to set.
 * @param value - The value to assign to the CSS property.
 * @returns A command that sets the CSS property on the element.
 */
export function setCss(property: string, value: string): Command<void> {
  return function () {
    this.style.setProperty(property, value);
  };
}

/**
 * Creates a command to set multiple CSS properties on an element.
 * @param properties - An object containing CSS property-value pairs to set.
 * @returns A command that sets multiple CSS properties on the element.
 */
export function mapSetCss(properties: Record<string, string>): Command<void> {
  return function () {
    for (const key in properties) {
      this.style.setProperty(key, properties[key]);
    }
  };
}

/**
 * Creates a command to get the width of an element in pixels.
 * @returns A command that retrieves the width of the element.
 */
export function getWidth(): Command<number> {
  return function () {
    return this.getBoundingClientRect().width;
  };
}

/**
 * Creates a command to set the width of an element.
 * @param value - The width value to set, either as a number (pixels) or a string (with units).
 * @returns A command that sets the width of the element.
 */
export function setWidth(value: string | number): Command<void> {
  return function () {
    this.style.width = typeof value === "number" ? `${value}px` : value;
  };
}

/**
 * Creates a command to get the height of an element in pixels.
 * @returns A command that retrieves the height of the element.
 */
export function getHeight(): Command<number> {
  return function () {
    return this.getBoundingClientRect().height;
  };
}

/**
 * Creates a command to set the height of an element.
 * @param value - The height value to set, either as a number (pixels) or a string (with units).
 * @returns A command that sets the height of the element.
 */
export function setHeight(value: string | number): Command<void> {
  return function () {
    this.style.height = typeof value === "number" ? `${value}px` : value;
  };
}

/**
 * Creates a command to get the inner width of an element, including padding but excluding borders and margins.
 * @returns A command that retrieves the clientWidth of the element.
 */
export function getInnerWidth(): Command<number> {
  return function () {
    return this.clientWidth;
  };
}

/**
 * Creates a command to get the inner height of an element, including padding but excluding borders and margins.
 * @returns A command that retrieves the clientHeight of the element.
 */
export function getInnerHeight(): Command<number> {
  return function () {
    return this.clientHeight;
  };
}

/**
 * Creates a command to get the outer width of an element, including borders and optionally margins.
 * @param includeMargin - Whether to include margins in the calculation (default is false).
 * @returns A command that retrieves the outer width of the element, optionally including margins.
 */
export function getOuterWidth(includeMargin: boolean = false): Command<number> {
  return function () {
    let width = this.offsetWidth;
    if (includeMargin) {
      const style = getComputedStyle(this);
      width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }
    return width;
  };
}

/**
 * Creates a command to get the outer height of an element, including borders and optionally margins.
 * @param includeMargin - Whether to include margins in the calculation (default is false).
 * @returns A command that retrieves the outer height of the element, optionally including margins.
 */
export function getOuterHeight(includeMargin: boolean = false): Command<number> {
  return function () {
    let height = this.offsetHeight;
    if (includeMargin) {
      const style = getComputedStyle(this);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }
    return height;
  };
}

/**
 * Creates a command to get the offset position of an element relative to the document.
 * @returns A command that retrieves the top and left offset of the element.
 */
export function getOffset(): Command<{ top: number; left: number }> {
  return function () {
    const rect = this.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    };
  };
}

/**
 * Creates a command to get the horizontal scroll position of an element.
 * @returns A command that retrieves the scrollLeft value of the element.
 */
export function getScrollLeft(): Command<number> {
  return function () {
    return this.scrollLeft;
  };
}

/**
 * Creates a command to set the horizontal scroll position of an element.
 * @param value - The scroll position to set.
 * @returns A command that sets the scrollLeft value of the element.
 */
export function setScrollLeft(value: number): Command<void> {
  return function () {
    this.scrollLeft = value;
  };
}

/**
 * Creates a command to get the vertical scroll position of an element.
 * @returns A command that retrieves the scrollTop value of the element.
 */
export function getScrollTop(): Command<number> {
  return function () {
    return this.scrollTop;
  };
}

/**
 * Creates a command to set the vertical scroll position of an element.
 * @param value - The scroll position to set.
 * @returns A command that sets the scrollTop value of the element.
 */
export function setScrollTop(value: number): Command<void> {
  return function () {
    this.scrollTop = value;
  };
}
