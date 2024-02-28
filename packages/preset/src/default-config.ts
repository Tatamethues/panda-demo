import { defineConfig, type Config } from "@pandacss/dev";
import preset from "./preset.js";

export const defaultConfig = defineConfig({
	presets: ["@pandacss/dev/presets", preset],
	// Whether to use css reset
	preflight: true,
	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},
	importMap: "@repo/style",
	jsxFramework: "solid",
});

type Plugin = NonNullable<Config["plugins"]>[number];

export const withoutOutdirPlugin = {
	name: "without-ourdir",
	hooks: {
		"codegen:prepare": (args) => {
			return args.artifacts.filter((art) => art.dir?.at(-1) !== "jsx");
		},
	},
} as Plugin;
