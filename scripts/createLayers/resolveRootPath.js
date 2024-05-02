/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");

/**
 * 
 * @param  {...string} segments 
 * @returns {string}
 */
module.exports = (...segments) => path.resolve(__dirname, "..", "..", "src", ...segments);