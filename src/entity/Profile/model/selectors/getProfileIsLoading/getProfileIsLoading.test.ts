import { StateSchema } from "app/providers/store";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("get profile data selector", () => {
	test("should return loading status", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			},
		};

		expect(getProfileIsLoading(state as StateSchema)).toBe(true);
	});

	test("should return false if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileIsLoading(state as StateSchema)).toBe(false);
	});
});
