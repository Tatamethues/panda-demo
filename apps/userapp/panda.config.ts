import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	presets: ["@pandacss/dev/presets", "@repo/ui/preset"],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@repo/ui/dist/panda.buildinfo.json",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},
	importMap: "@repo/style",
	jsxFramework: "solid",

	// The output directory for your css system
	outdir: "../../packages/style",
});
