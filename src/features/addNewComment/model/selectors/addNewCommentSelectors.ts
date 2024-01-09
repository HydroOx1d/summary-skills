import { StateSchema } from "app/providers/store";


export const getNewCommentError = (state: StateSchema) => state.addNewComment?.error;
export const getNewCommentText = (state: StateSchema) => state.addNewComment?.text || "";
export const getNewCommentIsLoading = (state: StateSchema) => state.addNewComment?.isLoading || false;