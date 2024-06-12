import { classNames } from "shared/lib/classNames/className";
import cls from "./NotificationButton.module.scss";
import NotificationIcon from "shared/assets/icons/notification-line.svg";
import Popover from "shared/ui/Popover/Popover";
import { NotificationList } from "entity/Notification";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = (props: NotificationButtonProps) => {
	const {
		className
	} = props;

	return (
		<Popover
			className={classNames(cls.NotificationButton, {}, [className])}
			trigger={
				<Button theme={ButtonTheme.CLEAR}>
					<NotificationIcon width={24} height={24} className={cls.notificationIcon}/>
				</Button>
			} 
			direction="bottom right"
		>
			<NotificationList className={cls.notifications}/>
		</Popover>
	);
};

export default NotificationButton;
