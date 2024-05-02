/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs");
const resolveRootPath = require("../resolveRootPath");
const createModel = require("./createModel");
const createUI = require("./createUI");
const createPublicApi = require("./createPublicApi");

module.exports = (layerName, sliceName) => {
	fs.mkdir(resolveRootPath(layerName, sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при создании папки слоя");
		}

		createModel(layerName, sliceName);
		createUI(layerName, sliceName);
		createPublicApi(layerName, sliceName);
	});
};