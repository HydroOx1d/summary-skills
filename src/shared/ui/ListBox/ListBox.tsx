import { Listbox } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { classNames } from "shared/lib/classNames/className";
import Button, { ButtonTheme } from "../Button/Button";
import cls from "./ListBox.module.scss";

type ListBoxOption<T extends string> = {
	value: T;
	content: string;
}

interface ListBoxProps<T extends string> {
	className?: string;
	options?: ListBoxOption<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}

function ListBox<T extends string>(props: ListBoxProps<T>) {
	const {
		className,
		options,
		value,
		onChange,
		readonly
	} = props;

	const onHandleChange = useCallback((value: T) => {
		onChange?.(value);
	}, [onChange]);

	return (
		<Listbox value={value} onChange={onHandleChange} as="div" className={classNames(cls.ListBox, {[cls.readonly]: readonly}, [className])} disabled={readonly}>
			<Listbox.Button className={cls.button_wrap}>
				<Button theme={ButtonTheme.OUTLINE} className={cls.button}>{value}</Button>
			</Listbox.Button>
			<Listbox.Options as="div" className={cls.options}>
				{options && options.map((option) => (
					<Listbox.Option
						key={option.value}
						value={option.value}
						as={Fragment}
					>
						{({selected}) => (
							<div className={cls.option}>{option.content} {selected && "-"}</div>
						)}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
}

export default ListBox;