import { StateSchema } from "app/providers/store";
import { getProfileReadonly } from "./getProfileReadonly";

describe("get profile data selector", () => {
	test("should return true", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};

		expect(getProfileReadonly(state as StateSchema)).toBe(true);
	});

	test("should return undefined if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
	});
});
