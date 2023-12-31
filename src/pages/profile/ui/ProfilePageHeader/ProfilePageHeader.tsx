import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, saveProfileData } from "entity/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";

const ProfilePageHeader = React.memo(() => {
	const { t } = useTranslation("profile");

	const readonly = useSelector(getProfileReadonly);

	const dispatch = useAppDispatch();
	const thunkDispatch = useThunkDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onEditCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onEditSave = useCallback(() => {
		thunkDispatch(saveProfileData());
	}, [thunkDispatch]);

	return (
		<div className={cls.ProfilePageHeader}>
			<Text title={t("profile")} className={cls.title}/>
			{readonly ? (
				<Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
					{t("profileBtnEdit")}
				</Button>
			) : (
				<>
					<Button theme={ButtonTheme.OUTLINE_RED} onClick={onEditCancel} className={cls.editCancel}>
						{t("profileBtnCancelEdit")}
					</Button>
					<Button theme={ButtonTheme.OUTLINE} onClick={onEditSave} className={cls.editSave}>
						{t("profileBtnSaveEdit")}
					</Button>
				</>
			)}
		</div>
	);
});

ProfilePageHeader.displayName = "ProfilePageHeader";

export default ProfilePageHeader;