import { StateSchema } from "app/providers/store";

export const getCounter = (state: StateSchema) => state.counter;