import { fileURLToPath } from "url";
import { resolve } from "path";
import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import del from "rollup-plugin-delete";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const p = (...paths) => resolve(__dirname, ...paths);

const babelPlugin = babel({
  babelHelpers: "bundled",
  presets: ["@babel/preset-env"],
});

const terserPlugin = terser();

export default defineConfig({
  input: p("lib/index.ts"),
  treeshake: true,
  output: [
    {
      file: p("dist/index.js"),
      format: "esm",
    },
    {
      file: p("dist/index.min.js"),
      format: "esm",
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
});
