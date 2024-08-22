import { getUserInited, initAuthData } from "@/entity/User";
import { classNames } from "@/shared/lib/classNames/className";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import React, { useEffect } from "react";
import { AppRouter } from "./providers/router";
import { useSelector } from "react-redux";
import { PageLoader } from "@/widgets/PageLoader";

export const App = () => {
	const { theme } = useTheme();
	const dispatch = useThunkDispatch();
	const userInited = useSelector(getUserInited);
	
	useEffect(() => {
		if (!userInited) {
			dispatch(initAuthData());
		}
	}, [dispatch, userInited]);

	if (!userInited) {
		return (
			<PageLoader/>
		);
	}

	return (
		<React.Suspense fallback="">
			<div className={classNames("app", {}, [theme])}>
				<Navbar />
				<main className="main">
					<Sidebar />
					<AppRouter />
				</main>
			</div>
		</React.Suspense>
	);
};
