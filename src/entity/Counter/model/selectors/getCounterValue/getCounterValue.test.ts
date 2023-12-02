import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateSchema } from "app/providers/store";

describe("get counter value", () => {
	test("should return value", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		};

		expect(getCounterValue(state as StateSchema)).toBe(10);
	});
});