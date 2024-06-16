
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./AdminPanelPage.module.scss";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames(cls.AdminPanelPage, {}, [className])}>AdminPanelPage</div>
	);
};

export default AdminPanelPage;
