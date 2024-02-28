import { defineConfig } from "@pandacss/dev";
import { defaultConfig } from "@repo/preset";

export default defineConfig({
	...defaultConfig,
	outdir: "dist",
	forceConsistentTypeExtension: true,
});
