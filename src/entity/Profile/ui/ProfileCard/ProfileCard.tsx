import React from "react";
import cls from "./ProfileCard.module.scss";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Input from "shared/ui/Input/Input";
import type { Profile } from "../../model/types/profileSchema";
import Loader from "shared/ui/Loader/Loader";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import Avatar from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entity/Currency";
import { Country, CountrySelect } from "entity/Country";
import VStack from "shared/ui/Stack/VStack/VStack";
import HStack from "shared/ui/Stack/HStack/HStack";
import { ValidateProfileError } from "features/editableProfileCard";

interface ProfileCardProps {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
	validateErrors?: ValidateProfileError[];
  onUpdateProfileName?: (value?: string) => void;
  onUpdateProfileSurname?: (value?: string) => void;
  onUpdateProfileAge?: (value?: string) => void;
  onUpdateProfileCity?: (value?: string) => void;
  onUpdateProfileUsername?: (value?: string) => void;	
  onUpdateProfileAvatar?: (value?: string) => void;
  onUpdateProfileCurrency?: (value?: Currency) => void;
  onUpdateProfileCountry?: (value?: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
	const {t} = useTranslation("profile");
	const {
		data,
		error,
		isLoading,
		readonly,
		validateErrors,
		onUpdateProfileName,
		onUpdateProfileSurname,
		onUpdateProfileAge,
		onUpdateProfileCity,
		onUpdateProfileAvatar,
		onUpdateProfileUsername,
		onUpdateProfileCurrency,
		onUpdateProfileCountry
	} = props;

	if (isLoading) {
		return (
			<HStack align="center" justify="center" className={classNames(cls.ProfileCard, {}, [cls.loading])}>
				<Loader />
			</HStack>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [cls.error])}>
				<Text title="Что-то пошло не так" text="Пожалуйста, обновите страницу" theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
			</div>
		);
	}

	const errorsMapping: Record<ValidateProfileError, string> = {
		[ValidateProfileError.INCORRECT_USER_AGE]: "Incorrect age",
		[ValidateProfileError.INCORRECT_USER_DATA]: "Incorrect user data",
		[ValidateProfileError.NO_DATA]: "No data",
		[ValidateProfileError.SERVER_ERROR]: "Server error"
	};
  
	return (
		<VStack gap="16" className={cls.ProfileCard}>
			<HStack justify="center" align="center">
				<Avatar src={data?.avatar} alt="Avatar" />
			</HStack>
			<VStack gap="16">
				{validateErrors?.length ? validateErrors.map(error => {
					return (
						<Text text={errorsMapping[error]} key={error} data-testid="ProfileCard.Error"/>
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
		</VStack>
	);
};

export default React.memo(ProfileCard);