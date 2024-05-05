import { StateSchema } from "app/providers/store";
import { getProfileValidateError } from "./getProfileValidateError";
import { ValidateProfileError } from "../../types/editableProfileCard";

describe("get profile data selector", () => {
	test("should return validate errors", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.INCORRECT_USER_AGE,
					ValidateProfileError.INCORRECT_USER_DATA
				]
			},
		};

		expect(getProfileValidateError(state as StateSchema)).toEqual([
			ValidateProfileError.INCORRECT_USER_AGE,
			ValidateProfileError.INCORRECT_USER_DATA
		]);
	});

	test("should return empty array if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileValidateError(state as StateSchema)).toEqual([]);
	});
});
