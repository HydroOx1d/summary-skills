import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Input.module.scss";

type InputTypes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;

interface InputProps extends InputTypes {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = React.memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		...otherProps
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input className={classNames(cls.Input, {}, [className])} {...otherProps} value={value} onChange={onChangeHandler}/>
	);
});

Input.displayName = "Input";

export default Input;