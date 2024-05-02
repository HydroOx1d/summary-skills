/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs");
const resolveRootPath = require("../resolveRootPath");
const publicApiTemplate = require("./publicApiTemplate");

module.exports = (layerName, sliceName) => {
	fs.writeFile(resolveRootPath(layerName, sliceName, "index.ts"), publicApiTemplate(layerName, sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при создании публичного апи");
		}
	});
};