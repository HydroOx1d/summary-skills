import React from "react";
import cls from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Input from "shared/ui/Input/Input";

const LoginForm = () => {
	const {t} = useTranslation();
  
	return (
		<div className={cls.Form}>
			<Input type="text" placeholder={t("loginFormUsername")}/>
			<Input type="password" placeholder={t("loginFormPassword")}/>
			<Button className={cls.button} theme={ButtonTheme.OUTLINE}>
				{t("login")}
			</Button>
		</div>
	);
};

export default LoginForm;