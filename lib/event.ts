import type { Command } from "./types";

/**
 * Creates a command to add an event listener to an element.
 * @param event - The name of the event to listen for.
 * @param listener - The event handler function or object.
 * @param options - Optional parameters specifying characteristics about the event listener.
 * @returns A command that adds the event listener to the element.
 */
export function on(
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): Command<void> {
  return function (node) {
    node.addEventListener(event, listener, options);
  };
}

/**
 * Creates a command to remove an event listener from an element.
 * @param event - The name of the event to remove.
 * @param listener - The event handler function or object to remove.
 * @param options - Optional parameters that match those used when the listener was added.
 * @returns A command that removes the event listener from the element.
 */
export function off(
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): Command<void> {
  return function (node) {
    node.removeEventListener(event, listener, options);
  };
}

/**
 * Creates a command to add an event listener that triggers only once on an element.
 * @param event - The name of the event to listen for.
 * @param listener - The event handler function or object.
 * @param options - Optional parameters specifying characteristics about the event listener.
 * @returns A command that adds a one-time event listener to the element.
 */
export function once(
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): Command<void> {
  return function (node) {
    const _listener: EventListenerOrEventListenerObject = (e) => {
      if (listener instanceof Function) {
        listener(e);
      } else {
        listener.handleEvent(e);
      }
      node.removeEventListener(event, _listener, options);
    };
    node.addEventListener(event, _listener, options);
  };
}
