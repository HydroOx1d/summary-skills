import React from "react";
import { useTranslation } from "react-i18next";
import Page from "shared/ui/Page/Page";

const About = React.memo(() => {
	const {t} = useTranslation("about");

	return (
		<Page>{t("about")}</Page>
	);
});

About.displayName = "About";

export default About;
