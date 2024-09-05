import { classNames } from "@/shared/lib/classNames/className";
import VStack from "@/shared/ui/Stack/VStack/VStack";
import { SidebarItemType } from "../../model/types/sidebar";
import SidebarItem from "../SidebarItem/SidebarItem";
import cls from "./SidebarRedesigned.module.scss";
import Text from "@/shared/ui/Text/Text";
import Button from "@/shared/ui/Button/Button";

interface SidebarRedesignedProps {
  className?: string;
  sidebarItems: SidebarItemType[];
}

const SidebarRedesigned = (props: SidebarRedesignedProps) => {
	const {
		className,
		sidebarItems
	} = props;

	return (
		<VStack className={classNames(cls.SidebarRedesigned, {}, [className])}>
			<Text className={cls.logo} size="xl" tag="h2">Skills Fusion</Text>
			<VStack gap="4" className={cls.items}>
				{sidebarItems.map(sidebarItem => <SidebarItem item={sidebarItem} key={sidebarItem.path} className={cls.item}/>)}
			</VStack>

			<Button size="large" variant="secondary" className={cls.btn}>Создать статью</Button>
		</VStack>
	);
};

export default SidebarRedesigned;