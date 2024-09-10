import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./NotificationList.module.scss";
import { useGetNotificationsQuery } from "../../api/notificationApi";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import NotificationItem from "../NotificationItem/NotificationItem";
import Skeleton from "@/shared/ui/deprecated/Skeleton/Skeleton";
import TextDeprecated from "@/shared/ui/deprecated/Text/Text";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import Text from "@/shared/ui/Text/Text";

interface NotificationListProps {
  className?: string;
}

const NotificationList = (props: NotificationListProps) => {
	const {
		className
	} = props;

	const {data: notifications, isLoading, isError} = useGetNotificationsQuery(undefined, {
		pollingInterval: 5000
	});

	if (isLoading) {
		return (
			<VStack gap="16" max className={classNames(cls.NotificationListDeprecated, {}, [className])}>
				<Skeleton width={"100%"} height={60} border={4}/>
				<Skeleton width={"100%"} height={60} border={4}/>
				<Skeleton width={"100%"} height={60} border={4}/>
			</VStack>
		);
	}

	if (isError) {
		return (
			<VStack max className={classNames(cls.NotificationListDeprecated, {}, [className])}>
				Something went wrong
			</VStack>
		);
	}

	return (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
					{(notifications && notifications.length) ? notifications?.map(notification => {
						return (
							<NotificationItem key={notification.id} item={notification}/>
						);
					}) : (
						<Text>Not found</Text>
					)}
				</VStack>
			}
			off={
				<VStack gap="16" max className={classNames(cls.NotificationListDeprecated, {}, [className])}>
					{(notifications && notifications.length) ? notifications?.map(notification => {
						return (
							<NotificationItem key={notification.id} item={notification}/>
						);
					}) : (
						<TextDeprecated title="Not found"/>
					)}
				</VStack>
			}
		/>
	);
};

export default NotificationList;