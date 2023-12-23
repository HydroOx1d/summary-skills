import React from "react";
import Select from "shared/ui/Select/Select";
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
		<Select
			readonly={readonly}
			options={countryOptions}
			value={value}
			onChange={onHandleSelectChange}
		/>
	);
});

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
