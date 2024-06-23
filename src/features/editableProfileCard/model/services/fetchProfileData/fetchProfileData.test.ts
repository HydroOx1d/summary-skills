import { Country } from "@/entity/Country";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "@/entity/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Profile } from "@/entity/Profile";

describe("testing fetch profile data thunk", () => {
	test("should return profile data", async () => {
		const returnedValue: Profile = {
			id: "1",
			name: "nurs",
			surname: "nurs",
			age: 18,
			avatar: "asd",
			city: "asd",
			username: "nurs",
			country: Country.AMERICA,
			currency: Currency.EUR
		};

		const action = new TestAsyncThunk(fetchProfileData);

		action.api.get.mockReturnValue(Promise.resolve({data: returnedValue}));

		const result = await action.thunkCall("1");

		expect(action.api.get).toHaveBeenCalled();
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.payload).toEqual(returnedValue);
		expect(result.meta.requestStatus).toBe("fulfilled");
	});

	test("should be rejected", async () => {
		const action = new TestAsyncThunk(fetchProfileData);

		action.api.get.mockReturnValue(Promise.reject({ data: {status: 403} }));

		const result = await action.thunkCall("1");

		expect(action.api.get).toHaveBeenCalled();
		expect(action.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toBe("Something went wrong");
	});
});