import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/langConfig/langConfigForTests";

interface RenderWithRouterOptions {
	route?: string
}

const renderTestComponent = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
	const {route = "/"} = options;
	
	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18n}>{component}</I18nextProvider>
		</MemoryRouter>
	);
};

export { renderTestComponent };
