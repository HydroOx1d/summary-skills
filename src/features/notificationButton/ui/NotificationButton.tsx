import { NotificationList } from "@/entity/Notification";
import NotificationIconDeprecated from "@/shared/assets/icons/notification-line.svg";
import NotificationIcon from "@/shared/assets/icons/icon-notify.svg";
import { classNames } from "@/shared/lib/classNames/className";
import ButtonDeprecated, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import Drawer from "@/shared/ui/deprecated/Drawer/Drawer";
import Popover from "@/shared/ui/Popover/Popover";
import React from "react";
import { useMediaQuery } from "react-responsive";
import cls from "./NotificationButton.module.scss";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import Button from "@/shared/ui/Button/Button";
import { toggleFeature } from "@/shared/lib/features/toggleFeature";

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = (props: NotificationButtonProps) => {
	const {
		className
	} = props;

	const isDesktop = useMediaQuery({minWidth: 767});
	const isMobile = useMediaQuery({maxWidth: 767});

	const [isOpen, setIsOpen] = React.useState(false);

	const onDrawerOpenHandle = React.useCallback(() => {
		setIsOpen(true);
	}, []);

	const onDrawerCloseHandle = React.useCallback(() => {
		setIsOpen(false);
	}, []);

	const notificationTrigger = (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<Button variant="clear" onClick={onDrawerOpenHandle}>
					<NotificationIcon width={24} height={23} className={cls.notificationIcon}/>
				</Button>
			}
			off={
				<ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onDrawerOpenHandle}>
					<NotificationIconDeprecated width={24} height={24} className={cls.notificationIconDeprecated}/>
				</ButtonDeprecated>
			}
		/>
	);

	const notificationButtonClassname = toggleFeature({
		name: "isAppRedesigned",
		on: () => cls.NotificationButton,
		off: () => cls.NotificationButtonDeprecated
	});

	return (
		<>
			{isMobile && (
				<>
					{notificationTrigger}
					<Drawer isOpen={isOpen} onClose={onDrawerCloseHandle}>
						<NotificationList/>
					</Drawer>
				</>
			)}
			{isDesktop && (
				<Popover
					className={classNames(notificationButtonClassname, {}, [className])}
					trigger={notificationTrigger} 
					direction="bottom right"
					panelVariant="clear"
				>
					<NotificationList className={cls.notifications}/>
				</Popover>
			)}
		</>
	);
};

export default NotificationButton;
