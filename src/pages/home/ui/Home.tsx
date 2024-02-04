import React from "react";
import { useTranslation } from "react-i18next";
import Page from "shared/ui/Page/Page";

const Home = React.memo(() => {
	const {t} = useTranslation("main");

	return (
		<Page>{t("home")}</Page>
	);
});

Home.displayName = "Home";

export default Home;