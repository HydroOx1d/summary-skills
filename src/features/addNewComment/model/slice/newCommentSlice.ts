import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewCommentSchema } from "../types/newComment";

const initialState: NewCommentSchema = {  
	text: "",
	error: undefined,
	isLoading: false
};

const newCommentSlice = createSlice({
	name: "newComment",
	initialState,
	reducers: {
		setText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		}
	},
	extraReducers: (builder) => {

	},
});

export const {
	actions: newCommentActions,
	reducer: newCommentReducer,
} = newCommentSlice;
