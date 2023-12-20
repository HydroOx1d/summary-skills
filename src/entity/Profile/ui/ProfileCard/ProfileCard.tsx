import React from "react";
import cls from "./ProfileCard.module.scss";
import Text from "shared/ui/Text/Text";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Input from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";

const ProfileCard = () => {
	const {t} = useTranslation("profile");
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
  
	return (
		<div className={cls.ProfileCard}>
			<div className={cls.header}>
				<Text title={t("profile")} />
				<Button theme={ButtonTheme.OUTLINE}>
					{t("profileBtnEdit")}
				</Button>
			</div>
			<div className={cls.data}>
				<Input className={cls.input} value={data?.name} />
				<Input className={cls.input} value={data?.surname} />
			</div>
		</div>
	);
};

export default ProfileCard;