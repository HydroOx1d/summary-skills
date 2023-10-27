import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		...otherProps
	} = props;

	return (
		<button 
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;