import React from "react";
import cls from "./AppLink.module.scss";
import { LinkProps, Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/className";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

/**
 * @deprecated
 * Устаревший компонент
*/
export const AppLink = React.memo(function AppLink(props: AppLinkProps) {
	const { className, children, to, theme = "", ...otherProps } = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});
