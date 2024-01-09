import { Country } from "entity/Country";
import { Profile, ValidateProfileError } from "../../types/profileSchema";
import { saveProfileData } from "./saveProfileData";
import { Currency } from "entity/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

const data: Profile = {
	id: "1",
	name: "nurs",
	surname: "nurs",
	age: 18,
	avatar: "asd",
	city: "asd",
	username: "nurs",
	country: Country.AMERICA,
	currency: Currency.EUR,
};

describe("testing save profile data thunk", () => {
	test("success request", async () => {

		const action = new TestAsyncThunk(saveProfileData, {
			profile: {
				form: data
			}
		});

		action.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await action.thunkCall("1");

		expect(action.api.put).toHaveBeenCalled();
		expect(action.getState).toHaveBeenCalled();
		expect(result.payload).toEqual(data);
		expect(result.meta.requestStatus).toBe("fulfilled");

	});

	test("failed request", async () => {
		const action = new TestAsyncThunk(saveProfileData, {
			profile: {
				form: data,
			},
		});

		action.api.put.mockReturnValue(Promise.reject({ status: 403 }));

		const result = await action.thunkCall("1");

		expect(action.api.put).toHaveBeenCalled();
		expect(action.getState).toHaveBeenCalled();
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
		expect(result.meta.requestStatus).toBe("rejected");
	});

	test("validate errors", async () => {
		const action = new TestAsyncThunk(saveProfileData, {
			profile: {
				form: {...data, name: "", age: NaN},
			},
		});

		const result = await action.thunkCall("1");

		expect(action.getState).toHaveBeenCalled();
		expect(result.payload).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_USER_AGE,
		]);
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
