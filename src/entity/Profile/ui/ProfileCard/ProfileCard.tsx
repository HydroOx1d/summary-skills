import React from "react";
import cls from "./ProfileCard.module.scss";
import Text, { TextAlign, TextTheme } from "shared/ui/Text/Text";
import Input from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profileSchema";
import Loader from "shared/ui/Loader/Loader";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import Avatar from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entity/Currency";
import { Country, CountrySelect } from "entity/Country";

interface ProfileCardProps {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
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
			<div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [cls.error])}>
				<Text title="Что-то пошло не так" text="Пожалуйста, обновите страницу" theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
			</div>
		);
	}
  
	return (
		<div className={cls.ProfileCard}>
			<div className={cls.avatarWrap}>
				<Avatar src={data?.avatar} alt="Avatar" />
			</div>
			<div className={cls.data}>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.name}
					onChange={onUpdateProfileName}
					placeholder={t("profileFieldName")}
				/>
				<Input
					readonly={readonly}
					className={cls.input}
					value={data?.surname}
					onChange={onUpdateProfileSurname}
					placeholder={t("profileFieldSurname")}
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
			</div>
		</div>
	);
};

export default ProfileCard;