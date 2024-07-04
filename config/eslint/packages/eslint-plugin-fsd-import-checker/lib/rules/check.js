/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const Path = require("path");

const layers = new Set(["features", "entity", "pages", "widgets"]);

function isRelative(path) {
	return path == "." || path.startsWith("../") || path.startsWith("./");
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

const checkRule = {
	meta: {
		type: "suggestion",
		schema: [
			{
				type: "object",
				properties: {
					alias: {
						type: "string"
					}
				}
			}
		]
	},
	create: (ctx) => {
		const alias = ctx.options?.[0]?.alias ?? "";
		return {
			ImportDeclaration(node) {
				const nodeValue = node.source.value;
				const path = alias ? nodeValue.replace(`${alias}/`, "") : nodeValue;
				const filename = ctx.getFilename();
 
				if (shouldBeRelative(filename, path)) {
					ctx.report(node, "This import should be relative");
				}
			}
		};
	}
};

module.exports = checkRule;