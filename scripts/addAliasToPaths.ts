import {Project} from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const sources = project.getSourceFiles();

function isAbsolute(path: string): boolean {
	const absolutes = ["pages", "shared", "entity", "features", "app", "widgets"];

	return absolutes.some(abs => path.startsWith(abs));
}

sources.forEach(source => {
	const declarations = source.getImportDeclarations();

	declarations.forEach(dec => {
		const path = dec.getModuleSpecifierValue();

		if (isAbsolute(path)) {
			dec.setModuleSpecifier("@/" + path);
		}
	});
});

project.save();