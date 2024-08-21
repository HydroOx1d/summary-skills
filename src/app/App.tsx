import { userActions } from "@/entity/User";
import { classNames } from "@/shared/lib/classNames/className";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./providers/router";

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
