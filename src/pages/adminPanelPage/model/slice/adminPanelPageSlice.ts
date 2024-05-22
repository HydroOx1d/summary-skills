
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminPanelPageSchema } from "../types/adminPanelPage";

const initialState: AdminPanelPageSchema = {};

export const adminPanelPageSlice = createSlice({
	name: "adminPanelPage",
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

export const { actions: adminPanelPageActions, reducer: adminPanelPageReducer } = adminPanelPageSlice;
  