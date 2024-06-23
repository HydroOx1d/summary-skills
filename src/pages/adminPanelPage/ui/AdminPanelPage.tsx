
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames("", {}, [className])}>AdminPanelPage</div>
	);
};

export default AdminPanelPage;
