import Logger from "../helpers/logging.js";
import { sendError } from "../helpers/response.js";

export default (err, req, res, next) => {
	Logger.error(err.message, err);
	res.status(500).send(sendError(res, error, 500));
};
