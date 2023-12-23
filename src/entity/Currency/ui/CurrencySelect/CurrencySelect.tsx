import React from "react";
import Select from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";

const currencyOptions = [
	{
		value: Currency.EUR,
		content: Currency.EUR,
	},
	{
		value: Currency.RUB,
		content: Currency.RUB,
	},
	{
		value: Currency.USD,
		content: Currency.USD,
	}
];

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const CurrencySelect = React.memo((props: CurrencySelectProps) => {
	const {
		value,
		onChange,
		readonly
	} = props;

	const onHandleSelectChange = React.useCallback((value: string) => {
		onChange?.(value as Currency);
	}, [onChange]); 
  
	return (
		<Select
			readonly={readonly}
			options={currencyOptions}
			value={value}
			onChange={onHandleSelectChange}
		/>
	);
});

CurrencySelect.displayName = "CurrencySelect";

export default CurrencySelect;