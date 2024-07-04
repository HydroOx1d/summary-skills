/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {isRelative, layers} = require("../../helpers/index.js");

const publicApiImports = {
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

				if (isRelative(nodeValue)) return;

				const path = alias ? nodeValue.replace(`${alias}/`, "") : nodeValue;

				const segments = path.split("/");

				const layer = segments[0];

				if (!layers.has(layer)) return;

				const isImportFromPublicApi = segments.length <= 2;

				if (!isImportFromPublicApi) {
					ctx.report(node, "The import must be from the public api");
				}
			}
		};
	}
};

module.exports = publicApiImports;