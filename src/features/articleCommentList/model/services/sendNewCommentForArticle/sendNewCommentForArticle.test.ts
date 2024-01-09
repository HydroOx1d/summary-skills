import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { sendNewCommentForArticle } from "./sendNewCommentForArticle";

describe("testing send new comment for article feature", () => {
	test("should return data with resolved response", async () => {
		const returnedData = {
			id: 1,
			articleId: "1",
			content: "comment",
			user: {
				id: "1",
				username: "Ox1d"
			}
		};

		const action = new TestAsyncThunk(sendNewCommentForArticle, {
			user: {
				authData: {
					id: "1",
					username: "Ox1d",
				},
			},
			article: {
				data: {
					id: "1",
					title: "da"
				},
			},
		});
		action.api.post.mockReturnValue(Promise.resolve({ data: returnedData }));
		const result = await action.thunkCall("comment");

		expect(action.api.post).toHaveBeenCalled();
		expect(action.dispatch).toHaveBeenCalledTimes(3);
		expect(action.getState).toHaveBeenCalledTimes(2);
		expect(result.meta.arg).toBe("comment");
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(returnedData);
	});

	// BAD! BAD TEST!!!
	test("should return error with rejected response", async () => {
		const action = new TestAsyncThunk(sendNewCommentForArticle);
		action.api.post.mockReturnValue(Promise.resolve());
		const result = await action.thunkCall("comment");

		expect(result.meta.requestStatus).toBe("rejected");
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.arg).toBe("comment");
	});
	// BADDDDDDDDDDDD!!!!!!!!!!!!!!!!!!!!!
});
