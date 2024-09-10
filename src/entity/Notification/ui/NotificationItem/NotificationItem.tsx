import { classNames } from "@/shared/lib/classNames/className";
import TextDeprecated, { TextSize, TextTheme } from "@/shared/ui/deprecated/Text/Text";
import { Notification } from "../../model/types/notification";
import cls from "./NotificationItem.module.scss";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import MarkIcon from "@/shared/assets/icons/icon-mark.svg";
import Text from "@/shared/ui/Text/Text";

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
		<ToggleFeature
			name="isAppRedesigned"
			on={
				<VStack gap="8" className={classNames(cls.NotificationItem, {}, [className])}>
					<HStack gap="4" className={cls.header} align="center">
						<MarkIcon className={cls.markIcon} width={10} height={10}/>
						<Text className={cls.headerText} size="sm">Новое уведомление</Text>
					</HStack>
					<Text size="sm">{item.description}</Text>
				</VStack>
			}
			off={
				<div className={classNames(cls.NotificationItemDeprecated, {}, [className])}>
					<TextDeprecated title={item.title} text={item.description} theme={TextTheme.PRIMARY} size={TextSize.M}/>
				</div>
			}
		/>
	);
};

export default NotificationItem;