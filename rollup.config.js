import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import scss from "rollup-plugin-scss";

export default {
  input: "src/index.js",
  output: {
    file: pkg.main,
    format: "cjs",
  },
  external: ["react"],
  plugins: [
    scss(),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
};
