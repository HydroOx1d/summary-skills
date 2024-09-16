import React from "react";
import ListBox from "@/shared/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

const countryOptions = [
	{
		value: Country.AMERICA,
		content: Country.AMERICA,
	},
	{
		value: Country.RUSSIA,
		content: Country.RUSSIA,
	},
];

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const CountrySelect = React.memo((props: CountrySelectProps) => {
	const { value, onChange, readonly } = props;

	const onHandleSelectChange = React.useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange]
	);

	return (
		<ListBox value={value} onChange={onHandleSelectChange} options={countryOptions} readonly={readonly}/>
	);
});

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
