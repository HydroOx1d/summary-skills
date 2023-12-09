import { StateSchema } from "app/providers/store";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginStateError } from "./getLoginStateError";

describe("get login state selector", () => {
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "error",
			},
		};

		expect(getLoginStateError(state as StateSchema)).toEqual("error");
	});

	test("should return an empty string", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginStateError(state as StateSchema)).toEqual("");
	});
});
