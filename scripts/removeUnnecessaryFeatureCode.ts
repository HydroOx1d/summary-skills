import {JsxAttribute, Node, Project, StringLiteral, SyntaxKind} from "ts-morph";

const featureName = process.argv[2];
const switcher = process.argv[3];

if (!featureName) {
	throw new Error("Некорректно указан название feature");
}

if (!switcher || (switcher !== "on" && switcher !== "off")) {
	throw new Error("Укажите пожалуйста переключение feature (on или off)");
}

const toggleFunctionName = "toggleFeature";
const toggleComponentName = "ToggleFeature";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const sources = project.getSourceFiles();

function isToggleFunction(node: Node): boolean {
	let isToggleFeature = false;

	node.forEachChild(node => {
		if (node.getText() === toggleFunctionName) {
			isToggleFeature = true;
		}
	});

	return isToggleFeature;
}

function isToggleComponent(node: Node): boolean {
	const idetifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

	return idetifier?.getText() == toggleComponentName;
}

function getNodeByAttributeName(node: Node, attributeName: string) {
	const attrs = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

	return attrs.find(attr => {
		return attr.getFirstDescendantByKind(SyntaxKind.Identifier)?.getText() === attributeName;
	});
}

function removeParenthesesOfJsxExpression(attribute: JsxAttribute | undefined) {
	if (!attribute) return;

	const attr = attribute.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression()?.getText();

	if (attr?.startsWith("(")) {
		return attr.slice(1, -1);
	}

	return attr;
}

function removeQuotes(string: StringLiteral | undefined) {
	if (!string) return;
	return string.getText().slice(1, -1);
}

sources.forEach(source => {
	source.forEachDescendant(node => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			return removeFeatureFunction(node);
		}

		if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
			return removeFeatureComponent(node);
		}
	});
});

function removeFeatureComponent(node: Node) {
	const attributes = node.getFirstDescendantByKind(SyntaxKind.JsxAttributes);

	if (!attributes) return;

	const name = removeQuotes(getNodeByAttributeName(attributes, "name")?.getFirstDescendantByKind(SyntaxKind.StringLiteral));
	const onFn = removeParenthesesOfJsxExpression(getNodeByAttributeName(node, "on"));
	const offFn = removeParenthesesOfJsxExpression(getNodeByAttributeName(attributes, "off"));
	
	if (name != featureName) {
		throw new Error("Feature name is not defined");
	}

	if (switcher == "on" && onFn) {
		node.replaceWithText(onFn);
	}

	if (switcher == "off" && offFn) {
		node.replaceWithText(offFn);
	}
}

function removeFeatureFunction(node: Node) {
	const obj = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

	if (!obj) return;

	const name = removeQuotes(obj.getProperty("name")?.getFirstDescendantByKind(SyntaxKind.StringLiteral));
			
	if (featureName != name) {
		throw new Error("Feature name is not defined");
	}

	const on = obj.getProperty("on")?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();
	const off = obj.getProperty("off")?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();

	if (switcher == "on") {
		node.replaceWithText(on?.getText() ?? "");
	}

	if (switcher == "off") {
		node.replaceWithText(off?.getText() ?? "");
	}
}

project.save();