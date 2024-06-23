
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ForbiddenPageSchema } from "../types/forbiddenPage";

const initialState: ForbiddenPageSchema = {};

export const forbiddenPageSlice = createSlice({
	name: "forbiddenPage",
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

export const { actions: forbiddenPageActions, reducer: forbiddenPageReducer } = forbiddenPageSlice;
  