import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default [
	js.configs.recommended,
	...ts.configs.strict,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		rules: {},
	},
	{
		ignores: [".astro/**", "src/env.d.ts"],
	},
];
