import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error"
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
}

const Text = (props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY
	} = props;

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme]])}>
			{title && <div className={cls.title}>{title}</div>}
			{text && <div className={cls.text}>{text}</div>}
		</div>
	);
};

export default Text;