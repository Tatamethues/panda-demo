import { defineConfig } from "@pandacss/dev";
import { defaultConfig, withoutOutdirPlugin } from "@repo/preset";

export default defineConfig({
	...defaultConfig,
	plugins: [withoutOutdirPlugin],

	// Where to look for your css declarations
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@repo/ui/dist/panda.buildinfo.json",
	],
});
