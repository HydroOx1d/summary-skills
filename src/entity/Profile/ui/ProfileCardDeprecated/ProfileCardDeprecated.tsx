import { Country, CountrySelect } from "@/entity/Country";
import { Currency, CurrencySelect } from "@/entity/Currency";
import Avatar from "@/shared/ui/deprecated/Avatar/Avatar";
import Text from "@/shared/ui/deprecated/Text/Text";
import Input from "@/shared/ui/Fields/Input/Input";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import { useTranslation } from "react-i18next";
import { ValidateProfileError } from "../../model/consts/profile";
import { Profile } from "../../model/types/profileSchema";
import cls from "./ProfileCardDeprecated.module.scss";

interface ProfileCardDeprecatedProps {
  data?: Profile;
  readonly?: boolean;
	validateErrors?: ValidateProfileError[];
  errorsMapping?: Record<ValidateProfileError, string>;
  onUpdateProfileName?: (value?: string) => void;
  onUpdateProfileSurname?: (value?: string) => void;
  onUpdateProfileAge?: (value?: string) => void;
  onUpdateProfileCity?: (value?: string) => void;
  onUpdateProfileUsername?: (value?: string) => void;	
  onUpdateProfileAvatar?: (value?: string) => void;
  onUpdateProfileCurrency?: (value?: Currency) => void;
  onUpdateProfileCountry?: (value?: Country) => void;
}

const ProfileCardDeprecated = (props: ProfileCardDeprecatedProps) => {
	const {
		data,
		readonly,
		validateErrors,
		onUpdateProfileName,
		onUpdateProfileSurname,
		onUpdateProfileAge,
		onUpdateProfileCity,
		onUpdateProfileUsername,
		onUpdateProfileAvatar,
		onUpdateProfileCurrency,
		onUpdateProfileCountry,
		errorsMapping
	} = props;

	const {t} = useTranslation("profile");

	return (
		<VStack gap="16" className={cls.ProfileCardDeprecated}>
			<HStack justify="center" align="center">
				<Avatar src={data?.avatar} alt="Avatar" />
			</HStack>
			<VStack gap="16">
				{validateErrors?.length ? validateErrors.map(error => {
					return (
						<Text text={errorsMapping?.[error]} key={error} data-testid="ProfileCard.Error"/>
					);
				}) : null}
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.name}
					onChange={onUpdateProfileName}
					placeholder={t("profileFieldName")}
					data-testid="ProfileCard.NameInput"
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.surname}
					onChange={onUpdateProfileSurname}
					placeholder={t("profileFieldSurname")}
					data-testid="ProfileCard.SurnameInput"
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.age}
					onChange={onUpdateProfileAge}
					placeholder={t("profileFieldAge")}
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.city}
					onChange={onUpdateProfileCity}
					placeholder={t("profileFieldCity")}
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.username}
					onChange={onUpdateProfileUsername}
					placeholder={t("profileFieldUsername")}
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.avatar}
					onChange={onUpdateProfileAvatar}
					placeholder={t("profileFieldAvatarLink")}
				/>
				<CurrencySelect
					readonly={readonly}
					value={data?.currency}
					onChange={onUpdateProfileCurrency}
				/>
				<CountrySelect
					readonly={readonly}
					value={data?.country}
					onChange={onUpdateProfileCountry}
				/>
			</VStack>
		</VStack>);
};

export default ProfileCardDeprecated;