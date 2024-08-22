import { StateSchema } from "@/app/providers/store";

export const getUserInited = (state: StateSchema) => state.user._inited ?? false;