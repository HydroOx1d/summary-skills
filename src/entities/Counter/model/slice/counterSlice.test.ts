import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counter slice", () => {
	test("should increment", () => {
		const state: CounterSchema = {
			value: 10
		};

		expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
	});

	test("should decrement", () => {
		const state: CounterSchema = {
			value: 10,
		};

		expect(counterReducer(state, counterActions.decrement())).toEqual({
			value: 9,
		});
	});

	test("should work when state is undefined", () => {
		expect(counterReducer(undefined, counterActions.decrement())).toEqual({
			value: -1,
		});
	});
});