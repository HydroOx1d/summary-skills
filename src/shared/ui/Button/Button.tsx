import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted"
}

export enum SizesButton {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
	square?: boolean;
	size?: SizesButton
}

const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		theme = "",
		square,
		size = SizesButton.M,
		...otherProps
	} = props;

	return (
		<button 
			className={classNames(cls.Button, {[cls.square]: square}, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;