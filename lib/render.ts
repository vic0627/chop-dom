import type { Command, Void } from "./types";

/**
 * Creates a command to append one or more nodes or strings to an element.
 * @param nodes - Nodes or strings to append to the element.
 * @returns A command that appends the specified nodes or strings to the element.
 */
export function append(...nodes: (Node | string)[]): Command<Void> {
  return function (node) {
    node.append(...nodes);
  };
}

/**
 * Creates a command to append an element to a specified parent node.
 * @param parent - The parent node to which the element will be appended.
 * @returns A command that appends the element to the parent node.
 */
export function appendTo(parent: Node): Command<Void> {
  return function (node) {
    parent.appendChild(node);
  };
}

/**
 * Creates a command to remove an element from the DOM.
 * @returns A command that removes the element from the DOM.
 */
export function remove(): Command<Void> {
  return function (node) {
    node.remove();
  };
}

/**
 * Creates a command to replace a child node with a new node in an element.
 * @param newNode - The new node to insert.
 * @param oldNode - The existing child node to be replaced.
 * @returns A command that replaces the old child with the new node in the element.
 */
export function replaceChild(newNode: Node, oldNode: Node): Command<Void> {
  return function (node) {
    node.replaceChild(newNode, oldNode);
  };
}

/**
 * Creates a command to remove a specific child node from an element.
 * @param childNode - The child node to remove.
 * @returns A command that removes the specified child node from the element.
 */
export function removeChild(childNode: Node): Command<Void> {
  return function (node) {
    node.removeChild(childNode);
  };
}

/**
 * Creates a command to clone an element.
 * @param deep - Whether to perform a deep clone including the element's descendants (default is true).
 * @returns A command that clones the element and returns the cloned node.
 */
export function clone(deep: boolean = true): Command<Node> {
  return function (node) {
    return node.cloneNode(deep);
  };
}
