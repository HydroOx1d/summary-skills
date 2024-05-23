import type { StateSchema } from "app/providers/store";
import { getNewCommentError, getNewCommentIsLoading, getNewCommentText } from "./addNewCommentSelectors";

describe("new comment selectors", () => {
	test("should return comment error", () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				error: "error"
			}
		};

		expect(getNewCommentError(state as StateSchema)).toBe("error");
	});

	test("should return comment is loading status", () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				isLoading: true
			},
		};

		expect(getNewCommentIsLoading(state as StateSchema)).toBe(true);
	});

	test("should return comment text", () => {
		const state: DeepPartial<StateSchema> = {
			addNewComment: {
				text: "text"
			},
		};

		expect(getNewCommentText(state as StateSchema)).toBe("text");
	});
});