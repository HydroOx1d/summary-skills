import { DeepPartial } from "@reduxjs/toolkit";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entity/Country";
import { Currency } from "entity/Currency";
import { saveProfileData } from "../services/saveProfileData/saveProfileData";
import { Profile } from "entity/Profile";
import { ProfileSchema, ValidateProfileError } from "../types/editableProfileCard";

const data: Profile = {
	id: "1",
	name: "nurs",
	surname: "nurs",
	age: 18,
	avatar: "asd",
	city: "asd",
	username: "nurs",
	country: Country.AMERICA,
	currency: Currency.EUR,
};

describe("profile slice test", () => {
	test("should set readonly", () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: true,
		};

		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
			readonly: false
		});
	});

	test("should update form", () => {
		const state: DeepPartial<ProfileSchema> = {
			form: data
		};

		const cpData = {
			...data,
			name: "asd",
			surname: "asd",
			age: 1
		};

		expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(cpData))).toEqual({
			form: cpData
		});
	});

	test("should cancel form", () => {
		const state: DeepPartial<ProfileSchema> = {
			data,
			form: {...data, name: ""},
		};

		expect(
			profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit()
			)
		).toEqual({
			readonly: true,
			validateErrors: [],
			data,
			form: data
		});
	});

	test("extra reducer (update profile data) - pending status", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR]
		};

		expect(
			profileReducer(state as ProfileSchema, saveProfileData.pending)
		).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test("extra reducer (update profile data) - fulfilled status", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			readonly: false,
			data: undefined,
			form: undefined
		};

		expect(
			profileReducer(state as ProfileSchema, saveProfileData.fulfilled(data, "1", "1"))
		).toEqual({
			isLoading: false,
			readonly: true,
			data,
			form: data
		});
	});
});
