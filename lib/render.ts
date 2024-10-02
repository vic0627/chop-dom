import type { Action } from "./types";

/**
 * Creates an action to append one or more nodes or strings to an element.
 * @param nodes - Nodes or strings to append to the element.
 * @returns An action that appends the specified nodes to the element.
 */
export const append =
  (...nodes: (Node | string)[]): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.append(...nodes);

/**
 * Creates an action to append an element to a specified parent node.
 * @param parent - The parent node to which the element will be appended.
 * @returns An action that appends the element to the parent node.
 */
export const appendTo =
  (parent: Node): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    parent.appendChild(node);

/**
 * Creates an action to remove an element from the DOM.
 * @returns An action that removes the element from the DOM.
 */
export const remove =
  (): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.remove();

/**
 * Creates an action to replace a child node with a new node in an element.
 * @param newNode - The new node to insert.
 * @param oldNode - The existing child node to be replaced.
 * @returns An action that replaces the old child with the new node in the element.
 */
export const replaceChild =
  (newNode: Node, oldNode: Node): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.replaceChild(newNode, oldNode);

/**
 * Creates an action to remove a specific child node from an element.
 * @param childNode - The child node to remove.
 * @returns An action that removes the specified child node from the element.
 */
export const removeChild =
  (childNode: Node): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.removeChild(childNode);

/**
 * Creates an action to clone an element.
 * @param deep - Whether to perform a deep clone including the element's descendants (default is true).
 * @returns An action that clones the element and returns the cloned node.
 */
export const clone =
  (deep: boolean = true): Action<Node> =>
  <N extends HTMLElement>(node: N) =>
    node.cloneNode(deep);
