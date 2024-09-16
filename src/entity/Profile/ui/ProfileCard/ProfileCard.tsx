import { Country, CountrySelect } from "@/entity/Country";
import { Currency, CurrencySelect } from "@/entity/Currency";
import { classNames } from "@/shared/lib/classNames/className";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import AppImage from "@/shared/ui/AppImage/AppImage";
import Loader from "@/shared/ui/deprecated/Loader/Loader";
import TextDeprecated, { TextAlign, TextTheme } from "@/shared/ui/deprecated/Text/Text";
import Input from "@/shared/ui/Fields/Input/Input";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import Text from "@/shared/ui/Text/Text";
import React from "react";
import { ValidateProfileError } from "../../model/consts/profile";
import type { Profile } from "../../model/types/profileSchema";
import ProfileCardDeprecated from "../ProfileCardDeprecated/ProfileCardDeprecated";
import cls from "./ProfileCard.module.scss";

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
				<TextDeprecated title="Что-то пошло не так" text="Пожалуйста, обновите страницу" theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
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
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<VStack gap="32" className={cls.ProfileCard}>
					<HStack gap="16">
						<div className={classNames(cls.avatar, {}, ["_ibg"])}>
							<AppImage src={data?.avatar}/>
						</div>
						<VStack gap="16" className={cls.info} justify="around">
							<Text className={cls.title} tag="h4">Личные данные</Text>
							<HStack gap="16">
								<Input value={data?.name} placeholder="Имя" onChange={onUpdateProfileName} readonly={readonly} className={cls.input}/>
								<Input value={data?.surname} placeholder="Фамилия" onChange={onUpdateProfileSurname} readonly={readonly} className={cls.input}/>
							</HStack>
							<HStack gap="16">
								<Input value={data?.age} placeholder="Возраст" onChange={onUpdateProfileAge} readonly={readonly} className={cls.input}/>
								<Input value={data?.city} placeholder="Город" onChange={onUpdateProfileCity} readonly={readonly} className={cls.input}/>
							</HStack>
						</VStack>
					</HStack>
					<VStack gap="16">
						<Text className={cls.title} tag="h4">Настройки пользователя</Text>
						<HStack gap="16">
							<Input value={data?.username} placeholder="Имя пользователя" onChange={onUpdateProfileUsername} readonly={readonly} className={cls.input}/>
							<Input value={data?.avatar} placeholder="Аватар" onChange={onUpdateProfileAvatar} readonly={readonly} className={cls.input}/>
						</HStack>
						<HStack gap="16">
							<CurrencySelect readonly={readonly} value={data?.currency} onChange={onUpdateProfileCurrency}/>
							<CountrySelect readonly={readonly} value={data?.country} onChange={onUpdateProfileCountry}/>
						</HStack> 
					</VStack>
				</VStack>
			}
			off={
				<ProfileCardDeprecated
					data={data}
					readonly={readonly}
					validateErrors={validateErrors}
					onUpdateProfileName={onUpdateProfileName}
					onUpdateProfileSurname={onUpdateProfileSurname}
					onUpdateProfileAge={onUpdateProfileAge}
					onUpdateProfileCity={onUpdateProfileCity}
					onUpdateProfileUsername={onUpdateProfileUsername}
					onUpdateProfileAvatar={onUpdateProfileAvatar}
					onUpdateProfileCurrency={onUpdateProfileCurrency}
					onUpdateProfileCountry={onUpdateProfileCountry}
					errorsMapping={errorsMapping}
				/>
			}
		/>
	);
};

export default React.memo(ProfileCard);