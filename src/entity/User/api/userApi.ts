import { rtkApi } from "@/shared/api/rtkApi";
import { AccountSettings } from "../model/types/accountSettings";
import { User } from "../model/types/user";

interface UserApiProps {
  userId: string;
  accountSettings: AccountSettings
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		changeAccountSettings: build.mutation<User, UserApiProps>({
			query: ({userId, accountSettings}) => ({
				url: "/users/" + userId,
				method: "PATCH",
				body: {accountSettings}
			})
		}),
		getUserDataById: build.query<User, string>({
			query: (userId) => ({
				url: "/users/" + userId,
				method: "GET"
			})
		})
	}),
});

export const changeAccountSettingsMutation = userApi.endpoints.changeAccountSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;