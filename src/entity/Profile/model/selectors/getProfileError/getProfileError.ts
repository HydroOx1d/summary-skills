import { StateSchema } from "app/providers/store";


export const getProfileError = (state: StateSchema) => state.profile?.error;