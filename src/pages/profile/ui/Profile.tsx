import { EditableProfileCard } from "features/editableProfileCard";
import React from "react";
import { useParams } from "react-router-dom";
import Page from "widgets/Page/Page";

const Profile = React.memo(() => {
	const {profileId} = useParams<{profileId: string}>(); 

	return (
		<Page>
			<EditableProfileCard profileId={profileId}/>
		</Page>
	);
});

Profile.displayName = "Profile";

export default Profile;