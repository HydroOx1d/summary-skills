import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollSaverSchema } from "../types/scrollSaver";

const initialState: ScrollSaverSchema = {
	scroll: {}
};

const scrollSaverSlice = createSlice({
	name: "scrollSaver",
	initialState,
	reducers: {
		setScrollPostition(state, action: PayloadAction<{path: string, position: number}>) {
			state.scroll[action.payload.path] = action.payload.position;
		}
	}
});

export const { actions: scrollSaverActions, reducer: scrollSaverReducer } = scrollSaverSlice;
