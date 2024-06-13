import { classNames } from "shared/lib/classNames/className";
import Text, { TextSize, TextTheme } from "shared/ui/Text/Text";
import { Notification } from "../../model/types/notification";
import cls from "./NotificationItem.module.scss";

interface NotificationItem {
  item: Notification;
  className?: string;
}

const NotificationItem = (props: NotificationItem) => {
	const {
		className,
		item
	} = props;
  
	return (
		<div className={classNames(cls.NotificationItem, {}, [className])}>
			<Text title={item.title} text={item.description} theme={TextTheme.PRIMARY} size={TextSize.M}/>
		</div>
	);
};

export default NotificationItem;