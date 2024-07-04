/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const RuleTester = require("eslint").RuleTester;
const publicApiImport = require("../../lib/rules/public-api-imports.js");

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: "latest", sourceType: "module" }
});

ruleTester.run("check", publicApiImport, {
	valid: [
		{
			code: "import Test from \"@/features/test\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx",
			options: [
				{
					alias: "@"
				}
			]
		}
	],
	invalid: [
		{
			code: "import Test from \"features/test/model/types\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx",
			errors: [
				{
					message: "The import must be from the public api"
				}
			]
		}
	]
});