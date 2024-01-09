import { IComment } from "entity/Comment";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

describe("testing fetch comments by article id feature", () => {
	test("should return data with resolved response", async () => {
		const returnedData: IComment[] = [
			{
				articleId: "1",
				content: "Comment",
				id: 1,
				user: {
					id: "1",
					username: "username"
				}
			}
		];

		const action = new TestAsyncThunk(fetchCommentsByArticleId);
		action.api.get.mockReturnValue(Promise.resolve({ data: returnedData }));
		const result = await action.thunkCall("1");

		expect(action.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.arg).toBe("1");
		expect(result.payload).toEqual(returnedData);
	});

	test("should return error with rejected response", async () => {
		const action = new TestAsyncThunk(fetchCommentsByArticleId);
		action.api.get.mockReturnValue(Promise.reject({ data: { status: 403 } }));
		const result = await action.thunkCall("3");

		expect(action.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toEqual("Something went wrong");
		expect(result.meta.arg).toBe("3");
	});
});
