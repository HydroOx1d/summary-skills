import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { UserRoles } from "../../types/user";


export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getUserIsAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.ADMIN)));
export const getUserIsManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.MANAGER)));