import StoreProvider from "./ui/StoreProvider";
import { StateSchema } from "./config/stateSchema";
import { StoreWithReducerManager } from "../store/config/stateSchema";
import { AppDispatch } from "../store/config/store";
import { ThunkConfig } from "../store/config/stateSchema";
import { ThunkExtraArg } from "app/providers/store/config/stateSchema";

export {
	StoreProvider,
	StateSchema,
	StoreWithReducerManager,
	AppDispatch,
	ThunkExtraArg,
	ThunkConfig
};