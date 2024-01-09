import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error"
}

export enum TextAlign {
	LEFT = "left",
	CENTER = "center",
	RIGHT = "right"
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
	align?: TextAlign;
	size?: TextSize;
}

const Text = React.memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT,
		size = TextSize.M
	} = props;

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <div className={cls.title}>{title}</div>}
			{text && <div className={cls.text}>{text}</div>}
		</div>
	);
});

Text.displayName = "Text";

export default Text;