/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs");
const resolveRootPath = require("../resolveRootPath");
const firstCharToUpperCase = require("../firstCharToUpperCase");
const componentTemplate = require("./componentTemplate");
const asyncComponentTemplate = require("./asyncComponentTemplate");
const cssTemplate = require("./cssTemplate");
const storyTemplate = require("./storyTemplate");

function createComponent(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "ui", `${firstCharToUpperCase(sliceName)}.tsx`), componentTemplate(sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла компонента");
		}
	});
}

function createAsyncComponent(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "ui", `${firstCharToUpperCase(sliceName)}.async.tsx`), asyncComponentTemplate(sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла асинхронного компонента");
		}
	});
}

function createCss(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "ui", `${firstCharToUpperCase(sliceName)}.module.scss`), cssTemplate(sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла стиля");
		}
	});
}

function createStory(layerName, sliceName) {
	fs.writeFile(resolveRootPath(layerName, sliceName, "ui", `${firstCharToUpperCase(sliceName)}.stories.tsx`), storyTemplate(layerName, sliceName), (err) => {
		if (err) {
			throw new Error("Ошибка при записи файла истории");
		}
	});
}


module.exports = (layerName, sliceName) => {
	fs.mkdir(resolveRootPath(layerName, sliceName, "ui"), (err) => {
		if(err) {
			throw new Error("Ошибка при создании папки моделя");
		}

		createComponent(layerName, sliceName);
		createCss(layerName, sliceName);
		createStory(layerName, sliceName);

		if (layerName === "pages") {
			createAsyncComponent(layerName, sliceName);
		}
	});
};