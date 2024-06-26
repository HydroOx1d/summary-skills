/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const RuleTester = require("eslint").RuleTester;
const Path = require("path");

const layers = new Set(["features", "entity", "pages", "widgets"]);

function isRelative(path) {
	return path.startsWith("../") || path.startsWith("./");
}

// filename: example - \\?\C:\Users\User\Desktop\projects\production-project\src\pages\about\ui\About.tsx
// path: example - features/test/model/types

function shouldBeRelative(filename, path) {
	if (isRelative(path)) {
		return false;
	}

	
	const pathArray = path.split("/");
	
	const pathLayer = pathArray[0];
	const pathSlice = pathArray[1];
	
	if (!pathLayer || !pathSlice || !layers.has(pathLayer)) {
		return false;
	}

	const filenameArray = filename.split("src")[1].split(Path.sep).filter(Boolean);

	const filenameLayer = filenameArray[0];
	const filenameSlice = filenameArray[1];

	if (!filenameLayer || !filenameSlice || !layers.has(filenameLayer)) {
		return false;
	}

	return pathLayer === filenameLayer && pathSlice === filenameSlice;
}

const plugin = {
	meta: {
		name: "eslint-plugin-fsd-import-checker",
		version: "1.0.3"
	},
	rules: {
		"check": {
			create: (ctx) => {
				return {
					ImportDeclaration(node) {
						const path = node.source.value.replace("@/", "");
						const filename = ctx.filename;

						if (shouldBeRelative(filename, path)) {
							ctx.report(node, "This import should be relative");
						}
					}
				};
			}
		}
	},
};

const ruleTester = new RuleTester({
	parserOptions: { ecmaVersion: "latest", sourceType: "module" }
});

ruleTester.run("check", plugin.rules.check, {
	valid: [
		{
			code: "import Test from \"features/test\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx"
		},
		{
			code: "import Test from \"@/features/test\"",
			filename: "C:\\Users\\User\\Desktop\\projects\\production-project\\src\\pages\\about\\ui\\About.tsx"
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
		}
	]
});

module.exports = plugin;