import React from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTranslation } from "react-i18next";
import cls from "./PageError.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string
}

const PageError: React.FC<PageErrorProps> = (props) => {
	const { className } = props;
	const {t} = useTranslation();

	const onRefresh = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<div className={cls.title}>{t("pageError")}</div>
			<Button theme={ButtonTheme.CLEAR} onClick={onRefresh}>{t("pageRefresh")}</Button>
		</div>
	);
};

export default PageError;