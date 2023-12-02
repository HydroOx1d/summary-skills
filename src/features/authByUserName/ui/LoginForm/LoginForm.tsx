import React from "react";
import cls from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import Text, { TextTheme } from "shared/ui/Text/Text";

const LoginForm = React.memo(() => {
	const {t} = useTranslation();
	const dispatch = useDispatch<ThunkDispatch<StateSchema, unknown, AnyAction>>();
	const {username, password, isLoading, error} = useSelector(getLoginState);

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
		<div className={cls.Form}>
			<Text title={t("authForm")}/>
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
			{error && <Text text={error} theme={TextTheme.ERROR}/>}
			<Button className={cls.button} theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
				{t("login")}
			</Button>
		</div>
	);
});

LoginForm.displayName = "LoginForm";

export default LoginForm;