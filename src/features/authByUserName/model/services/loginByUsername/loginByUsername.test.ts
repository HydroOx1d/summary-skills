import { loginByUsername } from "./loginByUsername";
import { userActions } from "@/entity/User";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("testing loginByUsername feature", () => {
	test("should return data with resolved response", async () => {
		const returnedData = { username: "test", password: "123", id: "1" };
		
		const action = new TestAsyncThunk(loginByUsername);
		action.api.post.mockReturnValue(Promise.resolve({ data: returnedData }));
		const result = await action.thunkCall(returnedData);

		expect(action.api.post).toHaveBeenCalled();
		expect(action.dispatch).toBeCalledTimes(3);
		expect(action.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(returnedData)
		);
		expect(result.payload).toEqual(returnedData);
		expect(result.meta.requestStatus).toBe("fulfilled");
	});

	test("should return error with rejected response", async () => {

		const action = new TestAsyncThunk(loginByUsername);
		action.api.post.mockReturnValue(
			Promise.reject({ data: { status: 403 } })
		);
		const result = await action.thunkCall({
			password: "123",
			username: "test"
		});

		expect(action.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toEqual("authError");
	});
});
