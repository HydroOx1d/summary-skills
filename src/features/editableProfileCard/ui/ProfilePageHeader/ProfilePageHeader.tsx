import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import HStack from "shared/ui/Stack/HStack/HStack";
import Text from "shared/ui/Text/Text";
import { canEditProfie } from "../../model/selectors/canEditProfile/canEditProfile";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { saveProfileData } from "../../model/services/saveProfileData/saveProfileData";
import { profileActions } from "../../model/slice/profileSlice";

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
		<HStack justify="between" max>
			<Text title={t("profile")} />
			<HStack gap="8">
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
								>
									{t("profileBtnCancelEdit")}
								</Button>
								<Button
									theme={ButtonTheme.OUTLINE}
									onClick={onEditSave}
								>
									{t("profileBtnSaveEdit")}
								</Button>
							</>
						)}
					</>
				)}
			</HStack>
		</HStack>
	);
});

ProfilePageHeader.displayName = "ProfilePageHeader";

export default ProfilePageHeader;