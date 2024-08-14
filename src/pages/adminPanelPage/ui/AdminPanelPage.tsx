
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import { Page } from "@/widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const {
		className
	} = props;

	return (
		<Page data-testid="AdminPanelPage" className={classNames("", {}, [className])}>AdminPanelPage</Page>
	);
};

export default AdminPanelPage;
