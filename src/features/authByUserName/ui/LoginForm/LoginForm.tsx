import React from "react";
import cls from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import Text, { TextTheme } from "shared/ui/Text/Text";
import { getLoginStateUsername } from "../../model/selectors/getLoginStateUsername/getLoginStateUsername";
import { getLoginStatePassword } from "../../model/selectors/getLoginStatePassword/getLoginStatePassword";
import { getLoginStateIsLoading } from "../../model/selectors/getLoginStateIsLoading/getLoginStateIsLoading";
import { getLoginStateError } from "../../model/selectors/getLoginStateError/getLoginStateError";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = React.memo(() => {
	const {t} = useTranslation();
	
	const dispatch = useDispatch<ThunkDispatch<StateSchema, unknown, AnyAction>>();
	const username = useSelector(getLoginStateUsername);
	const password = useSelector(getLoginStatePassword);
	const isLoading = useSelector(getLoginStateIsLoading);
	const error = useSelector(getLoginStateError);

	const onChangeUsername = React.useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = React.useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);
	
	const onLoginClick = React.useCallback(
		() => {
			dispatch(loginByUsername({
				password,
				username
			}));
		},
		[dispatch, password, username]
	);
	
	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<div className={cls.Form}>
				<Text title={t("authForm")} />
				<Input
					type="text"
					placeholder={t("loginFormUsername")}
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type="password"
					placeholder={t("loginFormPassword")}
					onChange={onChangePassword}
					value={password}
				/>
				{error && <Text text={error} theme={TextTheme.ERROR} />}
				<Button
					className={cls.button}
					theme={ButtonTheme.OUTLINE}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t("login")}
				</Button>
			</div>
		</ReducerLoader>
	);
});

LoginForm.displayName = "LoginForm";

export default LoginForm;