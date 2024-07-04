/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const RuleTester = require("eslint").RuleTester;
const checkRule = require("./lib/rules/check.js");

const plugin = {
	meta: {
		name: "eslint-plugin-fsd-import-checker",
		version: "1.0.7"
	},

	rules: {
		"check": checkRule
	},
};

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: "latest", sourceType: "module" }
});

ruleTester.run("check", checkRule, {
	valid: [
		{
			code: "import Test from \"features/test\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx",
		},
		{
			code: "import Test from \"@/features/test\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx",
			options: [
				{
					alias: "@"
				}
			]
		},
		{
			code: "import Test from \"../model/types\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx"
		},
	],
	invalid: [
		{
			code: "import Test from \"features/test/model/types\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\features\\test\\ui",
			errors: [
				{
					message: "This import should be relative"
				}
			]
		},
		{
			code: "import Test from \"@/features/test/model/types\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\features\\test\\ui",
			errors: [
				{
					message: "This import should be relative"
				}
			],
			options: [
				{
					alias: "@"
				}
			]
		},
		// {
		// 	code: "import Test from \"features/test\"",
		// 	filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx",
		// 	options: ["asdsadsa"]
		// },
	]
});

module.exports = plugin;