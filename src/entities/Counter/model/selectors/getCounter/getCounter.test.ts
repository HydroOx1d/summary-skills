import { StateSchema } from "app/providers/store";
import { getCounter } from "./getCounter";
import { DeepPartial } from "@reduxjs/toolkit";

describe("get counter selector", () => {
	test("should return object counter with value 10", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		};
		expect(getCounter(state as StateSchema)).toEqual({value: 10});
	});
});