import StoreProvider from "./ui/StoreProvider";
import type { StateSchema } from "./config/stateSchema";
import type { StoreWithReducerManager } from "../store/config/stateSchema";
import type { AppDispatch } from "../store/config/store";
import type { ThunkConfig } from "../store/config/stateSchema";
import type { ThunkExtraArg } from "app/providers/store/config/stateSchema";

export {
	StoreProvider,
	StateSchema,
	StoreWithReducerManager,
	AppDispatch,
	ThunkExtraArg,
	ThunkConfig
};