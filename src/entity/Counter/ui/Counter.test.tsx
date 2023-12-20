import { fireEvent, screen } from "@testing-library/react";
import { renderTestComponent } from "shared/lib/tests/renderTestComponent/renderTestComponent";
import Counter from "./Counter";

describe("Counter", () => {
	test("first render component", () => {
		renderTestComponent(<Counter />);

		expect(screen.queryByTestId("value")).toHaveTextContent("0");
	});

	test("increment btn", () => {
		renderTestComponent(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});

		fireEvent.click(screen.queryByTestId("increment-btn")!);

		expect(screen.queryByTestId("value")).toHaveTextContent("11");
	});

	test("decrement btn", () => {
		renderTestComponent(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});

		fireEvent.click(screen.queryByTestId("decrement-btn")!);

		expect(screen.queryByTestId("value")).toHaveTextContent("9");
	});

	test("increment value when state is empty", () => {
		renderTestComponent(<Counter />);

		fireEvent.click(screen.queryByTestId("increment-btn")!);

		expect(screen.queryByTestId("value")).toHaveTextContent("1");
	});
});
