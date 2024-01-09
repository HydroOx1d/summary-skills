import { canEditProfie, getProfileData, getProfileReadonly, profileActions, saveProfileData } from "entity/Profile";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Text from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

const ProfilePageHeader = React.memo(() => {
	const { t } = useTranslation("profile");

	const readonly = useSelector(getProfileReadonly);
	const canEdit = useSelector(canEditProfie);
	const profileData = useSelector(getProfileData);

	const dispatch = useAppDispatch();
	const thunkDispatch = useThunkDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onEditCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onEditSave = useCallback(() => {
		if(profileData?.id) {
			thunkDispatch(saveProfileData(profileData.id));
		}
	}, [profileData?.id, thunkDispatch]);

	return (
		<div className={cls.ProfilePageHeader}>
			<Text title={t("profile")} className={cls.title} />
			{canEdit && (
				<>
					{readonly ? (
						<Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
							{t("profileBtnEdit")}
						</Button>
					) : (
						<>
							<Button
								theme={ButtonTheme.OUTLINE_RED}
								onClick={onEditCancel}
								className={cls.editCancel}
							>
								{t("profileBtnCancelEdit")}
							</Button>
							<Button
								theme={ButtonTheme.OUTLINE}
								onClick={onEditSave}
								className={cls.editSave}
							>
								{t("profileBtnSaveEdit")}
							</Button>
						</>
					)}
				</>
			)}
		</div>
	);
});

ProfilePageHeader.displayName = "ProfilePageHeader";

export default ProfilePageHeader;