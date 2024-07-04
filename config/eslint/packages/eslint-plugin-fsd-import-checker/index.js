/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const checkRule = require("./lib/rules/check.js");
const publicApiImports = require("./lib/rules/public-api-imports.js");

const plugin = {
	meta: {
		name: "eslint-plugin-fsd-import-checker",
		version: "1.0.8"
	},

	rules: {
		"check": checkRule,
		"public-api-imports": publicApiImports,
	},
};

module.exports = plugin;