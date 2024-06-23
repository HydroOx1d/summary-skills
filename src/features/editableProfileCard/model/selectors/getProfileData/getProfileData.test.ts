import { StateSchema } from "@/app/providers/store";
import { getProfileData } from "./getProfileData";
import { Country } from "@/entity/Country";
import { Currency } from "@/entity/Currency";

describe("get profile data selector", () => {
	test("should return data", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
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
		
		expect(getProfileData(state as StateSchema)).toEqual({
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

	test("should return default if the state is empty", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
