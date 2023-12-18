import React from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import cls from "./NotFound.module.scss";

const NotFound = React.memo(() => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.NotFound)}>
			{t("notFound")}
		</div>
	);
});

NotFound.displayName = "NotFound";

export default NotFound;