import { defineConfig } from "@solidjs/start/config";
// import UnoCSS from "unocss/vite";
export default defineConfig({
	// plugins: [UnoCSS()],
	ssr: {
		noExternal: ["@kobalte/core"],
	},
	optimizeDeps: {
		exclude: ["oslo"],
	},
	server: {
		hmr: {
			port: 40000,
		},
	},
});
