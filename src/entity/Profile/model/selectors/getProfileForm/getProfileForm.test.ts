import { StateSchema } from "app/providers/store";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

describe("get profile data selector", () => {
	test("should return form", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: {
					name: "Nurs",
					surname: "Nurs",
					age: 18,
					city: "asd",
					username: "username",
					country: Country.AMERICA,
					currency: Currency.EUR,
					avatar: "ads",
				},
			},
		};

		expect(getProfileForm(state as StateSchema)).toEqual({
			name: "Nurs",
			surname: "Nurs",
			age: 18,
			city: "asd",
			username: "username",
			country: Country.AMERICA,
			currency: Currency.EUR,
			avatar: "ads",
		});
	});

	test("should return undefined if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileForm(state as StateSchema)).toBe(undefined);
	});
});
