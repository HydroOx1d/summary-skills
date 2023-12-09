import { loginByUsername } from "./loginByUsername";
import axios from "axios";
import { userActions } from "entity/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("testing loginByUsername feature", () => {
	test("should return data with resolved response", async () => {
		const returnedData = { username: "test", password: "123", id: 1 };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedData }));
		
		const action = new TestAsyncThunk(loginByUsername);
		const result = await action.thunkCall(returnedData);

		expect(axios.post).toHaveBeenCalled();
		expect(action.dispatch).toBeCalledTimes(3);
		expect(action.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(returnedData)
		);
		expect(result.payload).toEqual(returnedData);
		expect(result.meta.requestStatus).toBe("fulfilled");
	});

	test("should return error with rejected response", async () => {

		mockedAxios.post.mockReturnValue(
			Promise.reject({ data: { status: 403 } })
		);
		const action = new TestAsyncThunk(loginByUsername);
		const result = await action.thunkCall({
			password: "123",
			username: "test"
		});

		expect(axios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toEqual("authError");
	});
});
