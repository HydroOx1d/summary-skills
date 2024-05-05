import { createSelector } from "@reduxjs/toolkit";
import { getProfileData } from "../getProfileData/getProfileData";
import { getUserAuthData } from "entity/User";


export const canEditProfie = createSelector(getProfileData, getUserAuthData, (profileData, userData) => profileData?.id === userData?.id);