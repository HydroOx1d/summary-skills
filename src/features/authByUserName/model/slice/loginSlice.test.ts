import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("login slice test", () => { 
	test("should set username", () => {
		const state: DeepPartial<LoginSchema> = {
			username: "",
		};

		expect(loginReducer(state as LoginSchema, loginActions.setUsername("test"))).toEqual({
			username: "test"
		});
	});

	test("should set password", () => {
		const state: DeepPartial<LoginSchema> = {
			password: ""
		};

		expect(loginReducer(state as LoginSchema, loginActions.setPassword("test"))).toEqual({
			password: "test"
		});
	});
});