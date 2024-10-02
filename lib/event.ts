import type { Action } from "./types";

/**
 * Creates an action to add an event listener to an element.
 * @param event - The name of the event to listen for.
 * @param listener - The event handler function or object.
 * @param options - Optional parameters specifying characteristics about the event listener.
 * @returns An action that adds the event listener to an element.
 */
export const on =
  (
    event: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.addEventListener(event, listener, options);

/**
 * Creates an action to remove an event listener from an element.
 * @param event - The name of the event to remove.
 * @param listener - The event handler function or object to remove.
 * @param options - Optional parameters that match those used when the listener was added.
 * @returns An action that removes the event listener from an element.
 */
export const off =
  (
    event: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): Action<void> =>
  <N extends HTMLElement>(node: N) =>
    node.removeEventListener(event, listener, options);

/**
 * Creates an action to add an event listener that triggers only once on an element.
 * @param event - The name of the event to listen for.
 * @param listener - The event handler function or object.
 * @param options - Optional parameters specifying characteristics about the event listener.
 * @returns An action that adds a one-time event listener to an element.
 */
export const once =
  (
    event: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): Action<void> =>
  <N extends HTMLElement>(node: N) => {
    const _listener: EventListenerOrEventListenerObject = (e) => {
      if (listener instanceof Function) listener(e);
      else listener.handleEvent(e);
      node.removeEventListener(event, _listener, options);
    };
    node.addEventListener(event, _listener, options);
  };
