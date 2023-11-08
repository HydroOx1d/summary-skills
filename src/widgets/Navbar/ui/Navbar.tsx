import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(cls.Navbar)}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
					{t("mainLink")}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
					{t("aboutLink")}
				</AppLink>
			</div>
		</nav>
	);
};

export default Navbar;