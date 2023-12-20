import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/store";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/langConfig/langConfigForTests";

interface RenderWithRouterOptions {
	route?: string,
	initialState?: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const renderTestComponent = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
	const {
		route = "/",
		initialState,
		asyncReducers
	} = options;
	
	return render(
		<StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18n}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
};

export { renderTestComponent };
