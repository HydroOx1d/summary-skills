import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const inner = (Story: any): any => {
		return (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		);
	};

	return inner;
};
