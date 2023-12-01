/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const jsonServer = require("json-server");
const { readFileSync } = require("fs");
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});

	next();
});

server.use(async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({
			message: "Auth error!",
		});
	}

	next();
});

server.post("/login", (req, res) => {
	const { username, password } = req.body;

	const db = JSON.parse(
		readFileSync(path.resolve(__dirname, "db.json"), "utf-8")
	);

	const { users } = db;

	const user = users.find(
		(user) => user.username === username && user.password === password
	);

	if (user) {
		return res.status(200).json(user);
	}

	return res.status(404).json({
		message: "User is not found",
	});
});

server.use(router);
server.listen(3001, () => {
	console.log("JSON Server is running");
});
