import React from "react";
import { useTranslation } from "react-i18next";
import {Page} from "@/widgets/Page";

const Home = React.memo(() => {
	const {t} = useTranslation("main");

	return (
		<Page data-testid="HomePage">{t("home")}</Page>
	);
});

Home.displayName = "Home";

export default Home;