import React from "react";
import cls from "./AppLink.module.scss";
import { LinkProps, Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/className";

export type AppLinkVariant = "primary" | "secondary"

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant
}

const AppLink = React.memo((props: AppLinkProps) => {
	const { className, children, to, variant = "", ...otherProps } = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});

AppLink.displayName = "AppLink";

export default AppLink;