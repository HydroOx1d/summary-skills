import { EditableProfileCard } from "@/features/editableProfileCard";
import React from "react";
import { useParams } from "react-router-dom";
import Page from "@/widgets/Page/Page";
import { ProfileRating } from "@/features/profileRating";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import Text from "@/shared/ui/Text/Text";

const Profile = React.memo(() => {
	const {profileId} = useParams<{profileId: string}>();
	
	if (!profileId) {
		return (
			<Text title="Данный профиль не найден"/>
		);
	}

	return (
		<Page>
			<VStack gap="16">
				<EditableProfileCard profileId={profileId}/>
				<ProfileRating profileId={profileId} />
			</VStack>
		</Page>
	);
});

Profile.displayName = "Profile";

export default Profile;