import React from "react";
import cls from "./MainLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/className";

interface MainLayoutProps {
  className?: string;
  header: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
	const {
		className,
		header,
		main,
		sidebar
	} = props;

	return (
		<div className={classNames(cls.MainLayout, {}, [className])}>
			<div className={cls.sidebar}>{sidebar}</div>
			<div className={cls.content}>
				<div className={cls.header}>{header}</div>
				<div className={cls.main}>{main}</div>
			</div>
		</div>
	);
};

export default MainLayout;