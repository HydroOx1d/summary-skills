import { StateSchema } from "@/app/providers/store";

export const getProfileForm = (state: StateSchema) => state?.profile?.form || undefined;