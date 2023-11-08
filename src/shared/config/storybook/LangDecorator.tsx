import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../langConfig/langConfig";

export const LangDecorator = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<React.Suspense fallback="">
				<I18nextProvider i18n={i18n}>
					<Story />
				</I18nextProvider>
			</React.Suspense>
		);
	};

	return inner;
};
