import { createSelector } from "@reduxjs/toolkit";
import { getLoginState } from "../getLoginState/getLoginState";

export const getLoginStateIsLoading = createSelector(
	getLoginState,
	(login) => login?.isLoading || false
);
