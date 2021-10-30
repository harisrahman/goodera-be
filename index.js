import express from "express";
import setupDb from "./config/db.js";
import requestConditions from "./config/requestConditions.js";
import intializeRoutes from "./config/routes.js";
import Logger from "./helpers/logging.js";

const app = express();

setupDb();
requestConditions(app);
intializeRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	Logger.debug(`Server is up and running @ http://localhost:${PORT}`)
);
