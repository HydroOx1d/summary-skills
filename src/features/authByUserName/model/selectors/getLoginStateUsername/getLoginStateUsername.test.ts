import { StateSchema } from "app/providers/store";
import { getLoginStateUsername } from "./getLoginStateUsername";

describe("get login state selector", () => {
	test("should return username", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "123",
			},
		};

		expect(getLoginStateUsername(state as StateSchema)).toEqual("123");
	});

	test("should return an empty string", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginStateUsername(state as StateSchema)).toEqual("");
	});
});
