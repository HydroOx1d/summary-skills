import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
	INVERTED = "inverted"
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
	"data-testid"?: string;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Text = React.memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT,
		size = TextSize.M,
		"data-testid": dataTestId = "Text"
	} = props;

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <div className={cls.title} data-testid={`${dataTestId}.Heading`}>{title}</div>}
			{text && <div className={cls.text} data-testid={`${dataTestId}.Paragraph`}>{text}</div>}
		</div>
	);
});

Text.displayName = "Text";

export default Text;