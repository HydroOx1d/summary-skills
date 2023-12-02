import React, { useEffect } from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entity/User";

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
					<div className="page-content">
						<AppRouter />
					</div>
				</main>
			</div>
		</React.Suspense>
	);
};
