import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const p = (...paths) => resolve(__dirname, ...paths);

const babelPlugin = babel({
  babelHelpers: "bundled",
  comments: false,
  targets: "ie 11",
  presets: ["@babel/preset-env"],
});

const banner = readFileSync(p("LICENSE"));

const terserPlugin = terser();

export default defineConfig([
  {
    input: p("lib/chop-dom.ts"),
    treeshake: true,
    output: [
      {
        file: p("dist/chop-dom.js"),
        format: "esm",
        banner,
        plugins: [terserPlugin],
      },
      {
        file: p("dist/chop-dom.min.js"),
        format: "iife",
        name: "ChopDOM",
        banner,
        plugins: [terserPlugin],
      },
      {
        file: p("dist/chop-dom.umd.js"),
        format: "umd",
        name: "ChopDOM",
        banner,
        plugins: [terserPlugin],
      },
    ],
    plugins: [
      del({ targets: p("dist/*") }),
      typescript(),
      nodeResolve(),
      commonjs(),
      alias({
        entries: {
          "@/": p("lib"),
        },
      }),
      babelPlugin,
    ],
  },
  {
    input: p("dist/types/chop-dom.d.ts"),
    output: {
      file: p("dist/chop-dom.d.ts"),
      format: "esm",
      banner,
    },
    plugins: [del({ targets: p("dist/types"), hook: "buildEnd" }), dts()],
  },
]);
