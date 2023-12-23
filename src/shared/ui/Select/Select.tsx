import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Select.module.scss";
import { Currency } from "entity/Currency/model/types/currency";

export interface OptionType {
	value?: string;
	content?: string;
}

interface SelectProps {
  className?: string;
	options?: OptionType[];
	readonly?: boolean;
	value?: string;
	onChange?: (value: string) => void;
}

const Select = React.memo((props: SelectProps) => {
	const { className, options, readonly, value, onChange } = props;

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
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
		>
			{optionsList}
		</select>
	);
});

Select.displayName = "Select";

export default Select;