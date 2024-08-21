import {Node, Project, SyntaxKind} from "ts-morph";

const featureName = process.argv[2];
const switcher = process.argv[3];

if (!featureName) {
	throw new Error("Некорректно указан название feature");
}

if (!switcher || (switcher !== "on" && switcher !== "off")) {
	throw new Error("Укажите пожалуйста переключение feature (on или off)");
}

const project = new Project({});

// project.addSourceFilesAtPaths("src/**/*.ts");
// project.addSourceFilesAtPaths("src/**/*.tsx");

project.addSourceFilesAtPaths("src/pages/articleDetail/ui/ArticleDetail/ArticleDetail.tsx");

const sources = project.getSourceFiles();

function isToggleFeature(node: Node): boolean {
	let isToggleFeature = false;

	node.forEachChild(node => {
		if (node.getText() === "toggleFeature") {
			isToggleFeature = true;
		}
	});

	return isToggleFeature;
}

sources.forEach(source => {
	source.forEachDescendant(node => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFeature(node)) {
			const obj = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

			if (!obj) return;

			const name = obj.getProperty("name")?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);
			
			if (featureName != name) {
				return;
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
	});
	// const callExpressions = source.getDescendantsOfKind(SyntaxKind.CallExpression);

	// callExpressions.forEach(ce => {
	// 	const nodes = ce.getDescendantsOfKind(SyntaxKind.Identifier);

	// 	nodes.forEach(node => {
	// 		if (node.getText() == "toggleFeature") {
	// 			const obj = ce.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

	// 			if (!obj) return;

	// 			const name = obj.getProperty("name")?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText();
	// 			const on = obj.getProperty("on")?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();
	// 			const off = obj.getProperty("off")?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)?.getBody();

	// 			// on?.getText() ?? ""
	// 		}
	// 	});
	// });
});

project.save();