import { StateSchema } from "@/app/providers/store";

export const getProfileValidateError = (state: StateSchema) => state.profile?.validateErrors || [];