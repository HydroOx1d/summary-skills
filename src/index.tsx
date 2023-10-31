import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { App } from "./app/App";
import "./app/styles/index.scss";

import "shared/config/langConfig/langConfig";

const root = createRoot(document.getElementById("root"));


root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
