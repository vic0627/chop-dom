import type { Command } from "./types";

/**
 * Creates a command to get the inner HTML content of an element.
 * @returns A command that retrieves the innerHTML of the element.
 */
export function getInnerHtml(): Command<string> {
  return function (node) {
    return node.innerHTML;
  };
}

/**
 * Creates a command to set the inner HTML content of an element.
 * @param html - The HTML string to set as the element's innerHTML.
 * @returns A command that sets the innerHTML of the element.
 */
export function setInnerHtml(html: string): Command<void> {
  return function (node) {
    node.innerHTML = html;
  };
}

/**
 * Creates a command to prefix content to the existing innerHTML of an element.
 * @param html - The HTML string to prefix to the element's innerHTML.
 * @returns A command that prefixes the HTML content to the element's innerHTML.
 */
export function prefixInnerHtml(html: string): Command<void> {
  return function (node) {
    node.innerHTML = html + node.innerHTML;
  };
}

/**
 * Creates a command to append content to the existing innerHTML of an element.
 * @param html - The HTML string to append to the element's innerHTML.
 * @returns A command that appends the HTML content to the element's innerHTML.
 */
export function appendInnerHtml(html: string): Command<void> {
  return function (node) {
    node.innerHTML += html;
  };
}

/**
 * Creates a command to get the outer HTML of an element, including the element itself.
 * @returns A command that retrieves the outerHTML of the element.
 */
export function getOuterHtml(): Command<string> {
  return function (node) {
    return node.outerHTML;
  };
}

/**
 * Creates a command to set the outer HTML of an element, replacing the element and its contents.
 * @param html - The HTML string to replace the element with.
 * @returns A command that sets the outerHTML of the element.
 */
export function setOuterHtml(html: string): Command<void> {
  return function (node) {
    node.outerHTML = html;
  };
}

/**
 * Creates a command to prefix content to the existing outerHTML of an element.
 * @param html - The HTML string to prefix to the element's outerHTML.
 * @returns A command that prefixes the HTML content to the element's outerHTML.
 */
export function prefixOuterHtml(html: string): Command<void> {
  return function (node) {
    node.outerHTML = html + node.outerHTML;
  };
}

/**
 * Creates a command to append content to the existing outerHTML of an element.
 * @param html - The HTML string to append to the element's outerHTML.
 * @returns A command that appends the HTML content to the element's outerHTML.
 */
export function appendOuterHtml(html: string): Command<void> {
  return function (node) {
    node.outerHTML += html;
  };
}

/**
 * Creates a command to get the inner text content of an element.
 * @returns A command that retrieves the innerText of the element.
 */
export function getInnerText(): Command<string> {
  return function (node) {
    return node.innerText;
  };
}

/**
 * Creates a command to set the inner text content of an element.
 * @param text - The text string to set as the element's innerText.
 * @returns A command that sets the innerText of the element.
 */
export function setInnerText(text: string): Command<void> {
  return function (node) {
    node.innerText = text;
  };
}

/**
 * Creates a command to prefix text to the existing innerText of an element.
 * @param html - The text string to prefix to the element's innerText.
 * @returns A command that prefixes the text content to the element's innerText.
 */
export function prefixInnerText(html: string): Command<void> {
  return function (node) {
    node.innerText = html + node.innerText;
  };
}

/**
 * Creates a command to append text to the existing innerText of an element.
 * @param html - The text string to append to the element's innerText.
 * @returns A command that appends the text content to the element's innerText.
 */
export function appendInnerText(html: string): Command<void> {
  return function (node) {
    node.innerText += html;
  };
}

/**
 * Creates a command to get the outer text of an element, including the text of the element itself.
 * @returns A command that retrieves the outerText of the element.
 */
export function getOuterText(): Command<string> {
  return function (node) {
    return node.outerText;
  };
}

/**
 * Creates a command to set the outer text of an element, replacing the element and its contents.
 * @param text - The text string to replace the element with.
 * @returns A command that sets the outerText of the element.
 */
export function setOuterText(text: string): Command<void> {
  return function (node) {
    node.outerText = text;
  };
}

/**
 * Creates a command to prefix text to the existing outerText of an element.
 * @param html - The text string to prefix to the element's outerText.
 * @returns A command that prefixes the text content to the element's outerText.
 */
export function prefixOuterText(html: string): Command<void> {
  return function (node) {
    node.outerText = html + node.outerText;
  };
}

/**
 * Creates a command to append text to the existing outerText of an element.
 * @param html - The text string to append to the element's outerText.
 * @returns A command that appends the text content to the element's outerText.
 */
export function appendOuterText(html: string): Command<void> {
  return function (node) {
    node.outerText += html;
  };
}
