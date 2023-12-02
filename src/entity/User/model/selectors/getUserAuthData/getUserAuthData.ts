import { StateSchema } from "app/providers/store";

export const getUserAuthData = (state: StateSchema) => state.user.authData;