/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const layers = new Set(["features", "entity", "pages", "widgets"]);

function isRelative(path) {
	return path == "." || path.startsWith("../") || path.startsWith("./");
}

module.exports = {
	layers,
	isRelative
};