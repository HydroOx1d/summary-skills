/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (sliceName) => {
	return `
import React from "react";

export const ${firstCharToUpperCase(sliceName)}AsyncComponent = React.lazy(() => import("./${firstCharToUpperCase(sliceName)}"));
`;
};