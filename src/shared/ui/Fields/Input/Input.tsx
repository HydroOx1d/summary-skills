import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Input.module.scss";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";
import { useTheme } from "@/shared/lib/hooks/useTheme";

type InputTypes = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "readOnly" | "prefix" | "type"> & {
	type?: Exclude<React.InputHTMLAttributes<HTMLInputElement>["type"], "date">
};

interface InputProps extends InputTypes {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
	readonly?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
}

const Input = (props: InputProps) => {
	const {
		className,
		value,
		onChange,
		readonly,
		prefix,
		suffix,
		...otherProps
	} = props;
	const [isFocused, setIsFocused] = React.useState(false);
	
	const {theme} = useTheme();

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const inputClassname = toggleFeature({
		name: "isAppRedesigned",
		on: () => cls.Input,
		off: () => cls.InputDeprecated,
	});

	const inputHtml = (
		<input 
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)} 
			className={classNames(inputClassname, {[cls.readonly]: readonly}, [className, cls[theme ?? ""]])} 
			value={value} 
			onChange={onChangeHandler}
			disabled={readonly}
			{...otherProps}
		/>
	);

	if (prefix || suffix) {
		return (
			<div className={classNames(cls.wrapper, {[cls.focused]: isFocused}, [cls[theme ?? ""]])}>
				{prefix && <span className={cls.prefix}>{prefix}</span>}
				{inputHtml}
				{suffix && <span className={cls.suffix}>{suffix}</span>}
			</div>
		);
	}

	return inputHtml;
};

export default React.memo(Input);