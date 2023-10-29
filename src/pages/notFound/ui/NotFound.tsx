import React from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import cls from "./NotFound.module.scss";

const NotFound = () => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.NotFound)}>
			{t("notFound")}
		</div>
	);
};

export default NotFound;