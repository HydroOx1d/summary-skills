import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Text.module.scss";

type TextVariant = "primary" | "accent"

type TextAlign = "left" | "center" | "right"

type TextSize = "xs" | "sm" | "base" | "xl"

type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
	tag?: TextTag;
	"data-testid"?: string;
}

const Text = React.memo((props: React.PropsWithChildren<TextProps>) => {
	const {
		className,
		variant = "",
		align = "left",
		size = "base",
		"data-testid": dataTestId = "Text",
		tag: Tag = "p",
		children,
		...otherProps
	} = props;

	return (
		<Tag className={classNames(cls.Text, {}, [className, cls[variant], cls[align], cls[size]])} {...otherProps} data-testid={`${dataTestId}`}>{children}</Tag>
	);
});

Text.displayName = "Text";

export default Text;