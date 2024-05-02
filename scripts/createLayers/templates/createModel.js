/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs");
const resolveRootPath = require("../resolveRootPath");
const typeSchemaTemplate = require("./typeSchemaTemplate");
const sliceTemplate = require("./sliceTemplate");

function createTypeSchema(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "model", "types", `${sliceName}.ts`), typeSchemaTemplate(sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла типов в модели");
		}
	});
}

function createSlice(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "model", "slice", `${sliceName}Slice.ts`), sliceTemplate(sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла слайса в модели");
		}
	});
}

module.exports = (layerName, sliceName) => {
	fs.mkdir(resolveRootPath(layerName, sliceName, "model"), (err) => {
		if (err) {
			throw new Error("Ошибка при создании папки моделя");
		}

		fs.mkdir(resolveRootPath(layerName, sliceName, "model", "types"), (err) => {
			if (err) {
				throw new Error("Ошибка при создании папки типов в модели");
			}

			createTypeSchema(layerName, sliceName);
		});

		fs.mkdir(resolveRootPath(layerName, sliceName, "model", "slice"), (err) => {
			if (err) {
				throw new Error("Ошибка при создании папки слайсов в модели");
			}

			createSlice(layerName, sliceName);
		});

		fs.mkdir(resolveRootPath(layerName, sliceName, "model", "selectors"), (err) => {
			if (err) {
				throw new Error("Ошибка при создании папки типов в модели");
			} 
		});
	});
};