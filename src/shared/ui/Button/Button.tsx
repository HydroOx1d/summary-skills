import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Button.module.scss";
import { useTheme } from "@/shared/lib/hooks/useTheme";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "clear"

type SizesButton = "large" | "small"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
	size?: SizesButton;
}

const Button = React.memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = "secondary",
		disabled,
		size = "",
		...otherProps
	} = props;

	const {theme} = useTheme();

	return (
		<button 
			className={classNames(cls.Button, {[cls.disabled]: disabled}, [className, cls[variant], cls[size], cls[theme ?? ""]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export default Button;