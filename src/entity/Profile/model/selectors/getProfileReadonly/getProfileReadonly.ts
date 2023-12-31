import { StateSchema } from "app/providers/store";

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;