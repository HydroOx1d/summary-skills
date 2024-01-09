import { NewCommentSchema } from "../types/newComment";
import { newCommentActions, newCommentReducer } from "./newCommentSlice";

describe("new comment slice test", () => {
	test("should set text", () => {
		const state: DeepPartial<NewCommentSchema> = {
			text: ""
		};

		expect(newCommentReducer(state as NewCommentSchema, newCommentActions.setText("123"))).toEqual({
			text: "123"
		});
	});
});