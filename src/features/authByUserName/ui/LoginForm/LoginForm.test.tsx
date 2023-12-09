import { fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { renderTestComponent } from "shared/lib/tests/renderTestComponent/renderTestComponent";
import { loginReducer } from "features/authByUserName/model/slice/loginSlice";

describe("test Login form component", () => {
	test("should render the component correctly", () => {
		renderTestComponent(<LoginForm />);

		expect(screen.queryByTestId("loginForm")).toBeInTheDocument();
	});

	test("should render username and password value from the store", () => {
		renderTestComponent(<LoginForm />, {
			initialState: {
				loginForm: {
					username: "test",
					password: "123",
				},
			},
			asyncReducers: {
				loginForm: loginReducer,
			},
		});

		expect(screen.getByDisplayValue("test")).toBeInTheDocument();
		expect(screen.getByDisplayValue("123")).toBeInTheDocument();
	});

	test("values should be displayed when entering the username and password", () => {
		renderTestComponent(<LoginForm />, {
			initialState: {
				loginForm: {
					username: "",
					password: "",
				},
			},
			asyncReducers: {
				loginForm: loginReducer,
			},
		});

		const usernameInput = screen.getByTestId("loginFormUsername");
		const passwordInput = screen.getByTestId("loginFormPassword");

		fireEvent.change(usernameInput, {target: {value: "test"}});
		fireEvent.change(passwordInput, { target: { value: "123" } });

		expect(screen.getByDisplayValue("test")).toBeInTheDocument();
		expect(screen.getByDisplayValue("123")).toBeInTheDocument();
	});

	test("should render error text when error in the store is true", () => {
		renderTestComponent(<LoginForm />, {
			initialState: {
				loginForm: {
					error: "error"
				},
			},
			asyncReducers: {
				loginForm: loginReducer,
			},
		});

		const error = screen.getByText("error");
    
		expect(error).toBeInTheDocument();
	});
});
