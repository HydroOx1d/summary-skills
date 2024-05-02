/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const createTemplate = require("./templates/createTemplate");

const layer = process.argv[2];
const slice = process.argv[3];

const layers = ["entity", "features", "pages"];

if (!layer || !layers.includes(layer)) {
	throw new Error("Некорректно указан слой");
}

if (!slice) {
	throw new Error("Некорректно указан слайс");
}

createTemplate(layer, slice);