import { StateSchema } from "app/providers/store";


export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading || false;