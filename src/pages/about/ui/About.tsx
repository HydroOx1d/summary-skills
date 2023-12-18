import React from "react";
import { useTranslation } from "react-i18next";

const About = React.memo(() => {
	const {t} = useTranslation("about");

	return (
		<div>{t("about")}</div>
	);
});

About.displayName = "About";

export default About;
