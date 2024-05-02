/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (layerName, sliceName) => {
	const isPageLayer = layerName === "pages";

	return `
import { ${sliceName}Actions, ${sliceName}Reducer } from "./model/slice/${sliceName}Slice";
import type {${firstCharToUpperCase(sliceName)}Schema} from "./model/types/${sliceName}";
${!isPageLayer ? `import ${firstCharToUpperCase(sliceName)} from "./ui/${firstCharToUpperCase(sliceName)}"` : ""}
${isPageLayer ? `import { ${firstCharToUpperCase(sliceName)}AsyncComponent as ${firstCharToUpperCase(sliceName)}Page } from "./ui/${firstCharToUpperCase(sliceName)}.async";` : ""}

export {
	${sliceName}Actions, 
  ${sliceName}Reducer, 
  ${firstCharToUpperCase(sliceName)}Schema,
  ${!isPageLayer ? `${firstCharToUpperCase(sliceName)}` : ""}
  ${isPageLayer ? `${firstCharToUpperCase(sliceName)}Page` : ""}
};
`;
}; 