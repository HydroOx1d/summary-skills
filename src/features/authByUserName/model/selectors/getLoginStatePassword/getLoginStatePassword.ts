import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginStatePassword = createSelector(
	getLoginState,
	(login) => login?.password || ""
);
