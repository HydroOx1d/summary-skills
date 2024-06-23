import { rtkApi } from "@/shared/api/rtkApi";
import type { Notification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<Notification[], void>({
			query: () => ({
				url: "/notifications"
			}),
		}),
	}),
});

export const {useGetNotificationsQuery} = notificationApi;