/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (sliceName) => {
	return `
.${firstCharToUpperCase(sliceName)}{}
`;
};