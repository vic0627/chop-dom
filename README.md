# Chop-DOM

Chop-DOM is a lightweight and highly modular JavaScript library for DOM manipulation. It provides a suite of DOM-related utilities that can be selectively imported and tree-shaken for optimal performance and minimal bundle sizes.

This library is designed to be a modern, ES module-friendly alternative to larger libraries like jQuery, with a focus on modularity, tree-shaking, and clean, chainable APIs.

## Features

- **Tree-shakable**: Only import and bundle what you use. Every function is modular, which allows your bundler (e.g., Webpack, Rollup) to tree-shake unused code, minimizing your final bundle size.
- **Modular Design**: Each function or utility is its own module, so you can import exactly what you need for your project.
- **DOM Manipulation**: Supports common DOM manipulation tasks, including attributes, CSS, class lists, and event handling.
- **Chainable Actions**: Perform multiple actions on DOM elements in a clean and functional way, similar to jQuery, but in a modular and tree-shakable fashion.
- **TypeScript Support**: Includes TypeScript types for a smooth development experience with type safety.

## Installation

You can install Chop-DOM via npm:

```
npm install chop-dom
```

## Usage

Chop-DOM provides a flexible $ function that allows you to select DOM elements and apply a series of actions. It also provides a set of action factories that generate actions to manipulate the DOM elements in various ways.

### Example 1: Selecting Elements and Applying Actions

```js
import { $, setAttr, addClass, on } from "chop-dom";

// Disable all buttons and add a class
$(
  "button",
  setAttr("disabled", "true"),
  addClass("active"),
  on("click", () => console.log("Button clicked"))
);
```

### Example 2: Creating a New Element

```js
import { $, setInnerHtml, appendTo } from "chop-dom";

// Create a new <div> element and set its inner HTML
$("<div>", setInnerHtml("<p>Hello World</p>"), appendTo(document.body));
```

## Tree-shakable Design

Chop-DOM is designed with tree-shaking in mind, which means that only the functions you import and use are included in the final JavaScript bundle.

For example, if you only import setAttr and addClass, the bundler will only include these specific utilities in your project, and the rest of the library will be excluded from the build:

```js
import { $, setAttr, addClass } from "chop-dom";

// No extra code will be bundled if you don't use other utilities
$("button", setAttr("disabled", "true"), addClass("active"));
```

## TypeScript Support

Chop-DOM includes full TypeScript typings, allowing you to take advantage of autocompletion, type safety, and better code quality.

## License

Chop-DOM is released under the MIT License.
