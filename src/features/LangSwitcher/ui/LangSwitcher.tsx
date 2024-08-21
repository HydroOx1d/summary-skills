import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./LangSwitcher.module.scss";
import Button, { ButtonTheme } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcher {
  className?: string;
	short?: boolean
}

const LangSwitcher = React.memo((props: LangSwitcher) => {
	const { className, short = false } = props;

	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={toggleLang}
		>
			{t(short ? "shortLanguage" : "language")}
		</Button>
	);
});

LangSwitcher.displayName = "LangSwitcher";

export default LangSwitcher;