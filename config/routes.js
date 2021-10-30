import jobs from "../routes/job.js";
import httpError from "../middleware/httpError.js";

export default (app) => {
	app.use("/api/jobs", jobs);

	app.use((req, res, next) => res.status(404).send("Not found"));
	app.use(httpError);
};
