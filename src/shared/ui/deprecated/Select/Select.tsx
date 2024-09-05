import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Select.module.scss";

export interface OptionType<T extends string> {
	value?: T;
	content?: string;
}

type NewSelectProps = Omit<React.HTMLAttributes<HTMLSelectElement>, "onChange" | "value">

interface SelectProps<T extends string> extends NewSelectProps {
  className?: string;
  options?: OptionType<T>[];
  readonly?: boolean;
  value?: T;
  onChange?: (value: T) => void;
}

/**
 * @deprecated
 * Устаревший компонент
*/
const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, options, readonly, value, onChange, placeholder, ...otherProps } = props;

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
	};

	const optionsList = React.useMemo(() => {
		return options?.map((option) => {
			return (
				<option className={cls.option} key={option.value} value={option.value}>
					{option.content}
				</option>
			);
		});
	}, [options]);

	return (
		<select
			className={classNames(cls.Select, { [cls.readonly]: readonly }, [
				className,
			])}
			onChange={handleSelectChange}
			value={value}
			defaultValue={value || "DEFAULT"}
			{...otherProps}
		>
			{placeholder && <option disabled value={"DEFAULT"}>{placeholder}</option>}
			{optionsList}
		</select>
	);
};

export default React.memo(Select) as typeof Select;