import { defineGlobalStyles, definePreset } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
	"html,body": {
		bg: "background",
		color: "foreground",
	},
});

export const preset = definePreset({
	globalCss,
	theme: {
		extend: {
			tokens: {},
			semanticTokens: {
				colors: {
					primary: {
						50: {
							value: {
								base: "{colors.slate.50}",
								_dark: "{colors.slate.950}",
							},
						},
						100: {
							value: {
								base: "{colors.slate.100}",
								_dark: "{colors.slate.900}",
							},
						},
						200: {
							value: {
								base: "{colors.slate.200}",
								_dark: "{colors.slate.800}",
							},
						},
						300: {
							value: {
								base: "{colors.slate.300}",
								_dark: "{colors.slate.700}",
							},
						},
						400: {
							value: {
								base: "{colors.slate.400}",
								_dark: "{colors.slate.600}",
							},
						},
						500: {
							value: {
								base: "{colors.slate.500}",
								_dark: "{colors.slate.500}",
							},
						},
						600: {
							value: {
								base: "{colors.slate.600}",
								_dark: "{colors.slate.400}",
							},
						},
						700: {
							value: {
								base: "{colors.slate.700}",
								_dark: "{colors.slate.300}",
							},
						},
						800: {
							value: {
								base: "{colors.slate.800}",
								_dark: "{colors.slate.200}",
							},
						},
						900: {
							value: {
								base: "{colors.slate.900}",
								_dark: "{colors.slate.100}",
							},
						},
						950: {
							value: {
								base: "{colors.slate.950}",
								_dark: "{colors.slate.50}",
							},
						},
					},
					background: {
						value: {
							base: "{colors.gray.50}",
							_dark: "{colors.gray.950}",
						},
					},
					foreground: {
						value: {
							base: "{colors.gray.950}",
							_dark: "{colors.gray.50}",
						},
					},
				},
			},
		},
	},
});

export default preset;
