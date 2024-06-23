import { createSelector } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/store";
import { UserRoles } from "../../consts/consts";


export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getUserIsAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.ADMIN)));
export const getUserIsManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.MANAGER)));