import { StateSchema } from "app/providers/store";
import { getLoginStateIsLoading } from "./getLoginStateIsLoading";

describe("get login state selector", () => {
	test("should return is loading true", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		};

		expect(getLoginStateIsLoading(state as StateSchema)).toEqual(true);
	});

	test("should return default value", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginStateIsLoading(state as StateSchema)).toEqual(false);
	});
});
