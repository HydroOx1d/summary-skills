import { profileReducer } from "entity/Profile";
import React from "react";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";

const initialReducers: ReducersList = {
	profile: profileReducer
};

const Profile = React.memo(() => {
	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<div>Профиль</div>
		</ReducerLoader>
	);
});

Profile.displayName = "Profile";

export default Profile;