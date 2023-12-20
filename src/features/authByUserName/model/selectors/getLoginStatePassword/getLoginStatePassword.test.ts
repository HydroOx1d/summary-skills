import { StateSchema } from "app/providers/store";
import { getLoginStatePassword } from "./getLoginStatePassword";

describe("get login state selector", () => {
	test("should return password", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "123"
			},
		};

		expect(getLoginStatePassword(state as StateSchema)).toEqual("123");
	});

	test("should return an empty string", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginStatePassword(state as StateSchema)).toEqual("");
	});
});
