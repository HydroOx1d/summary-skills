import React from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import cls from "./NotFound.module.scss";
import Page from "widgets/Page/Page";

const NotFound = React.memo(() => {
	const {t} = useTranslation();

	return (
		<Page className={classNames(cls.NotFound)}>
			{t("notFound")}
		</Page>
	);
});

NotFound.displayName = "NotFound";

export default NotFound;