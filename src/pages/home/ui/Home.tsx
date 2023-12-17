import React from "react";
import { useTranslation } from "react-i18next";

const Home = React.memo(() => {
	const {t} = useTranslation("main");

	return (
		<div>{t("home")}</div>
	);
});

Home.displayName = "Home";

export default Home;