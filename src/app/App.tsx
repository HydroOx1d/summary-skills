import React, { useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/className";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "@/entity/User";
import { useTheme } from "@/shared/lib/hooks/useTheme";

export const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

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
