import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./NotificationButton.module.scss";
import NotificationIcon from "shared/assets/icons/notification-line.svg";
import Popover from "shared/ui/Popover/Popover";
import { NotificationList } from "entity/Notification";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import Drawer from "shared/ui/Drawer/Drawer";
import { useMediaQuery } from "react-responsive";

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
		<Button theme={ButtonTheme.CLEAR} onClick={onDrawerOpenHandle}>
			<NotificationIcon width={24} height={24} className={cls.notificationIcon}/>
		</Button>
	);

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
					className={classNames(cls.NotificationButton, {}, [className])}
					trigger={notificationTrigger} 
					direction="bottom right"
				>
					<NotificationList className={cls.notifications}/>
				</Popover>
			)}
		</>
	);
};

export default NotificationButton;
