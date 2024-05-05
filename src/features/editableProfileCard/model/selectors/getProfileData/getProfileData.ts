import { StateSchema } from "app/providers/store";

export const getProfileData = (state: StateSchema) => state?.profile?.data || undefined;