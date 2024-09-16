import { classNames } from "@/shared/lib/classNames/className";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import { Listbox } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import ButtonDeprecated, { ButtonTheme } from "../deprecated/Button/Button";
import CaretDown from "../../assets/icons/caret-down.svg";
import HStack from "../Stack/HStack/HStack";
import Text from "../Text/Text";
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
		console.log(value);
		onChange?.(value);
	}, [onChange]);

	return (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<Listbox value={value} onChange={onHandleChange} as="div" className={classNames(cls.ListBox, {[cls.readonly]: readonly}, [className])} disabled={readonly}>
					<Listbox.Button className={({open}) => classNames(cls.button, {[cls.active]: open})}>
						{({open, value}) => (
							<HStack gap="4" align="center" justify="center">
								<Text tag="span" size="sm">{value}</Text>
								<CaretDown width={10} height={6} className={classNames(cls.buttonIcon, {[cls.active]: open}, [])}/>
							</HStack>
						)}
					</Listbox.Button>
					<Listbox.Options as="div" className={cls.options}>
						{options && options.map((option) => (
							<Listbox.Option
								key={option.value}
								value={option.value}
								as={"div"}
							>
								<HStack justify="center" align="center" className={cls.option}>
									<Text size="sm" tag="span" className={cls.optionText} title={option.content}>{option.content}</Text>
								</HStack>
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Listbox>
			}
			off={
				<Listbox value={value} onChange={onHandleChange} as="div" className={classNames(cls.ListBoxDeprecated, {[cls.readonly]: readonly}, [className])} disabled={readonly}>
					<Listbox.Button className={cls.button_wrap}>
						<ButtonDeprecated theme={ButtonTheme.OUTLINE} className={cls.button}>{value}</ButtonDeprecated>
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
			}
		/>
	);
}

export default ListBox;