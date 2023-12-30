import { Profile, ValidateProfileError } from "../../types/profileSchema";

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const errors: ValidateProfileError[] = [];

	const {name, surname, age} = profile;

	if(!name || !surname) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_USER_AGE);
	}

	return errors;
};