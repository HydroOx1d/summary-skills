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
			<aside className={cls.sidebar}>{sidebar}</aside>
			<div className={cls.content}>
				<header className={cls.header}>{header}</header>
				<main className={cls.main}>{main}</main>
			</div>
		</div>
	);
};

export default MainLayout;