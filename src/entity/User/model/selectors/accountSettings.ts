import { StateSchema } from "@/app/providers/store";
import { AccountSettings } from "../types/accountSettings";
import { createSelector } from "@reduxjs/toolkit";

const defaultValue: AccountSettings = {};

export const getAccountSettings = (state: StateSchema) => state.user.authData?.accountSettings ?? defaultValue;
// export const getAccountSettingsByKey = (state: StateSchema, settingsKey: keyof AccountSettings) => state.user.authData?.accountSettings?.[settingsKey];
export const getAccountSettingsByKey = createSelector(
	[
		getAccountSettings, 
		(_: StateSchema, settingsKey: keyof AccountSettings) => settingsKey
	], 
	(accountSettings, settingsKey) => accountSettings[settingsKey]
);