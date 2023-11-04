import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
	test("first render component", () => {
		renderWithTranslations(<Sidebar/>);

		expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
	});

	test("collapse sidebar", () => {
		renderWithTranslations(<Sidebar/>);

		const $el = screen.queryByTestId("sidebar");
		const $collapseBtn = screen.queryByTestId("sidebar-collapse-btn");

		expect($el).not.toHaveClass("collapsed");

		fireEvent.click($collapseBtn);

		expect($el).toHaveClass("collapsed");
	});
});