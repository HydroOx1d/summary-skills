import type { ProfileRating } from "@/entity/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface ProfileRatingArgs {
	rate: number;
	userId: string;
	profileId: string;
	feedback?: string;
}

type GetProfileRatingArgs = Pick<ProfileRatingArgs, "profileId" | "userId">

const profileRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProfileRating: build.query<ProfileRating[], GetProfileRatingArgs>({
			query: (args) => ({
				url: "/profiles-rating",
				params: args
			}),
		}),
		createProfileRaing: build.mutation<void, ProfileRatingArgs>({
			query: (args) => ({
				url: "/profiles-rating",
				method: "POST",
				body: args
			})
		})
	}),
});

export const {useGetProfileRatingQuery, useCreateProfileRaingMutation} = profileRatingApi;