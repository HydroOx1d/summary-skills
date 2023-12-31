import { StateSchema } from "app/providers/store";
import { getProfileError } from "./getProfileError";

describe("get profile data selector", () => {
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: "error"
			},
		};

		expect(getProfileError(state as StateSchema)).toBe("error");
	});

	test("should return undefined if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileError(state as StateSchema)).toBe(undefined);
	});
});
