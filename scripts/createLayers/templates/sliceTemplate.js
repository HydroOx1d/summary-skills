/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (sliceName) => {
	return `
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ${firstCharToUpperCase(sliceName)}Schema } from "../types/${sliceName}";

const initialState: ${firstCharToUpperCase(sliceName)}Schema = {};

export const ${sliceName}Slice = createSlice({
	name: "${sliceName}",
	initialState,
	reducers: {
		template(state) {}
	},
  // extraReducers: (builder) => {
	// 	builder.addCase(, (state) => {});
	// 	builder.addCase(, (state) => {});
	// 	builder.addCase(, (state) => {});
	// },
});

export const { actions: ${sliceName}Actions, reducer: ${sliceName}Reducer } = ${sliceName}Slice;
  `;
};