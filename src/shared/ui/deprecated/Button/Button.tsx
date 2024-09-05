import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
	CLEAR_INVERTED = "clearInverted",
	OUTLINE = "outline",
	OUTLINE_RED = "outline_red",
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
	size?: SizesButton;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Button = React.memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = "",
		square,
		disabled,
		size = SizesButton.M,
		...otherProps
	} = props;

	return (
		<button 
			className={classNames(cls.Button, {[cls.square]: square, [cls.disabled]: disabled}, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export default Button;