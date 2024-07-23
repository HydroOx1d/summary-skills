import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { App } from "./app/App";
import "./app/styles/index.scss";

import "@/shared/config/langConfig/langConfig";
import { StoreProvider } from "@/app/providers/store";
import { ThemeProvider } from "@/shared/lib/providers/ThemeProvider";

const root = createRoot(document.getElementById("root")!);


root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>
);
