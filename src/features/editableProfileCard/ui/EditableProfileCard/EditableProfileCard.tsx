import { Country } from "@/entity/Country";
import { Currency } from "@/entity/Currency";
import { ProfileCard } from "@/entity/Profile";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileValidateError } from "../../model/selectors/getProfileValidateError/getProfileValidateError";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import ReducerLoader, { ReducersList } from "@/shared/lib/reducerLoader/ReducerLoader";
import ProfilePageHeader from "../ProfilePageHeader/ProfilePageHeader";
import VStack from "@/shared/ui/Stack/VStack/VStack";

const initialReducers: ReducersList = {
	profile: profileReducer
};

interface EditableProfileCardProps {
  className?: string;
  profileId?: string;
}

const EditableProfileCard = (props: EditableProfileCardProps) => {
	const {
		className,
		profileId
	} = props;

	const thunkDispatch = useThunkDispatch();
	const dispatch = useAppDispatch();
	const data = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateError);

	useEffect(() => {
		if (__PROJECT__ != "storybook" && __PROJECT__ != "jest") {
			if(profileId) {
				thunkDispatch(fetchProfileData(profileId));
			}
		}
	}, [profileId, thunkDispatch]);

	const onUpdateProfileName = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({
			name: value || ""
		}));
	}, [dispatch]); 

	const onUpdateProfileSurname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({
			surname: value || ""
		}));
	}, [dispatch]); 

	const onUpdateProfileAge = useCallback((value?: string) => {
		const newValue = value?.replace(/[a-zA-Z]/g, "");
		dispatch(profileActions.updateProfile({
			age: Number(newValue || 0)
		}));
	}, [dispatch]); 
	
	const onUpdateProfileCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({
			city: value || ""
		}));
	}, [dispatch]);

	const onUpdateProfileUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({
			username: value || ""
		}));
	}, [dispatch]);

	const onUpdateProfileAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({
			avatar: value || ""
		}));
	}, [dispatch]); 

	const onUpdateProfileCurrency = useCallback((value?: Currency) => {
		dispatch(profileActions.updateProfile({
			currency: value
		}));
	}, [dispatch]); 
	
	const onUpdateProfileCountry = useCallback((value?: Country) => {
		dispatch(profileActions.updateProfile({
			country: value
		}));
	}, [dispatch]);

	return (
		<ReducerLoader reducers={initialReducers} removeAfterUnmount>
			<VStack gap="16">
				{/* <ProfilePageHeader /> */}
				<ProfileCard
					data={data}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					validateErrors={validateErrors}
					onUpdateProfileName={onUpdateProfileName}
					onUpdateProfileSurname={onUpdateProfileSurname}
					onUpdateProfileAge={onUpdateProfileAge}
					onUpdateProfileCity={onUpdateProfileCity}
					onUpdateProfileAvatar={onUpdateProfileAvatar}
					onUpdateProfileUsername={onUpdateProfileUsername}
					onUpdateProfileCurrency={onUpdateProfileCurrency}
					onUpdateProfileCountry={onUpdateProfileCountry}
				/>
			</VStack>
		</ReducerLoader>
	);
};

export default EditableProfileCard;
