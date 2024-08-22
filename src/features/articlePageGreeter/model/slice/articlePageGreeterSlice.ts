
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlePageGreeterSchema } from "../types/articlePageGreeter";

const initialState: ArticlePageGreeterSchema = {};

export const articlePageGreeterSlice = createSlice({
	name: "articlePageGreeter",
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

export const { actions: articlePageGreeterActions, reducer: articlePageGreeterReducer } = articlePageGreeterSlice;
  