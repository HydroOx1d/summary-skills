const fs = require("fs");
const path = require("path");

(async function() {
	fs.rm(path.resolve(__dirname, "..", "node_modules", ".cache", "babel-loader"), {recursive: true, force: true}, (error) => {
		if (error) {
			console.log(error);
			throw new Error("Error while clear babel loader cache", error);
		}

		console.log("babel loader cache cleared");
	});
})();