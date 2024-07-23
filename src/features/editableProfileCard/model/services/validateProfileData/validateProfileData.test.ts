import { Country } from "@/entity/Country";
import { validateProfileData } from "./validateProfileData";
import { Currency } from "@/entity/Currency";
import { Profile, ValidateProfileError } from "@/entity/Profile";

const data: Profile = {
	name: "nurs",
	surname: "nurs",
	age: 18,
	avatar: "asd",
	city: "asd",
	username: "nurs",
	country: Country.AMERICA,
	currency: Currency.EUR,
};

describe("testing validate profile data function", () => {
	test("an errors array should be empty if profile data is correct", () => {

		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test("incorrect name and surname", () => {
		const cpData = {...data, name: "", surname: ""};

		const result = validateProfileData(cpData);

		expect(result).toHaveLength(1);
		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA
		]);
	});

	test("incorrect age", () => {
		const cpData = { ...data, age: NaN };

		const result = validateProfileData(cpData);

		expect(result).toHaveLength(1);
		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
	});

	test("incorrect data", () => {

		const result = validateProfileData({});

		expect(result).toHaveLength(2);
		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_USER_AGE,
		]);
	});
});
