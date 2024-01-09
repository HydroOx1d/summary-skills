import { NewCommentSchema } from "./model/types/newComment";
import AddNewCommentForm from "./ui/AddNewCommentForm/AddNewCommentForm";
import { newCommentActions, newCommentReducer } from "./model/slice/newCommentSlice";

export {
	NewCommentSchema,
	AddNewCommentForm,
	newCommentReducer,
	newCommentActions
};