import { ProfileCard, fetchProfileData, profileReducer } from "entity/Profile";
import React, { useEffect } from "react";
import { useThunkDispatch } from "shared/lib/hooks/useThunkDispatch";
import ReducerLoader, { ReducersList } from "shared/lib/reducerLoader/ReducerLoader";

const initialReducers: ReducersList = {
	profile: profileReducer
};

const Profile = React.memo(() => {
	const dispatch = useThunkDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<ProfileCard/>
		</ReducerLoader>
	);
});

Profile.displayName = "Profile";

export default Profile;