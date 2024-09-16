import React from "react";
import ListBox from "@/shared/ui/ListBox/ListBox";
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
  
	return (
		<ListBox value={value} onChange={onChange} options={currencyOptions} readonly={readonly}/>
	);
});

CurrencySelect.displayName = "CurrencySelect";

export default CurrencySelect;