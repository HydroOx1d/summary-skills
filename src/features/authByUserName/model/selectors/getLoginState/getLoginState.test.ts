import type { StateSchema } from "app/providers/store";
import { getLoginState } from "./getLoginState";
import type { DeepPartial } from "@reduxjs/toolkit";

describe("get login state selector", () => {
	test("should return login form", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "test",
				password: "123",
				isLoading: false,
				error: undefined
			},
		};

		expect(getLoginState(state as StateSchema)).toEqual({
			username: "test",
			password: "123",
			isLoading: false,
			error: undefined
		});
	});
});