/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@repo/eslint-config/solid.js", "plugin:@pandacss/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
	},
};
