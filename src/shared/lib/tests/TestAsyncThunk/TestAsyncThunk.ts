import { AnyAction, AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import axios, { AxiosStatic } from "axios";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
	dispatch: jest.MockedFn<ThunkDispatch<unknown, unknown, AnyAction>>;
	getState: () => StateSchema;
	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

	api: jest.MockedFunctionDeep<AxiosStatic>;

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.actionCreator = actionCreator;

		this.api = mockedAxios;
	}

	async thunkCall(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, {
			api: this.api
		});

		return result;
	}
}