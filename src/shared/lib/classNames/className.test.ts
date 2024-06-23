import { classNames } from "@/shared/lib/classNames/className";

describe("className", () => {
	test("one argument", () => {
		const expectation = "class";
		expect(classNames("class")).toBe(expectation);
	});

	test("argument in additional", () => {
		const expectation = "class class1 class2";
		expect(classNames("class", {}, ["class1", "class2"])).toBe(expectation);
	});

	test("argument in mods", () => {
		const expectation = "class class1 class2 hovered selected";

		expect(
			classNames("class", { hovered: true, selected: true }, [
				"class1",
				"class2",
			])
		).toBe(expectation);
	});

	test("mods argument false", () => {
		const expectation = "class class1 class2 hovered";

		expect(
			classNames("class", { hovered: true, selected: false }, [
				"class1",
				"class2",
			])
		).toBe(expectation);
	});


	test("mods argument undefined", () => {
		const expectation = "class class1 class2 hovered";

		expect(
			classNames("class", { hovered: true, selected: undefined }, [
				"class1",
				"class2",
			])
		).toBe(expectation);
	});
});