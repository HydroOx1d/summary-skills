import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginStateUsername = createSelector(
	getLoginState,
	(login) => login?.username || ""
);
