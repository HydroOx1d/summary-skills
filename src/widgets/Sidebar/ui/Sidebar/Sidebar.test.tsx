import { fireEvent, screen } from "@testing-library/react";
import { renderTestComponent } from "@/shared/lib/tests/renderTestComponent/renderTestComponent";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
	test("first render component", () => {
		renderTestComponent(<Sidebar/>, { route: "/" });

		expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
	});

	test("collapse sidebar", () => {
		renderTestComponent(<Sidebar />, { route: "/" });

		const $el = screen.queryByTestId("sidebar");
		const $collapseBtn = screen.queryByTestId("sidebar-collapse-btn")!;

		expect($el).not.toHaveClass("collapsed");

		fireEvent.click($collapseBtn);

		expect($el).toHaveClass("collapsed");
	});
});