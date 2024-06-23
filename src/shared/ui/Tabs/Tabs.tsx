import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./Tabs.module.scss";
import Card from "../Card/Card";

export type TabType<T extends string> = {
  value: T;
  content: React.ReactNode
}

interface TabsProps<T extends string> {
  className?: string;
  tabs?: TabType<T>[];
  value?: T;
  onTabChange?: (newTab: T) => void;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
	const {
		className,
		tabs,
		value,
		onTabChange
	} = props;

	const onTabChangeHandle = React.useCallback((newTab: T) => {
		onTabChange?.(newTab);
	}, [onTabChange]);

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs?.map(tab => {
				return (
					<Card 
						key={tab.value} 
						className={classNames(cls.tab, {[cls.active]: value === tab.value}, [])}
						onClick={onTabChangeHandle.bind(null, tab.value)}
					>
						{tab.content}
					</Card>
				);
			})}
		</div>
	);
};

export default Tabs;