import Job from "../models/job.js";
import { sendError, formatResponse } from "../helpers/response.js";

export const index = async (req, res) => {
	const jobs = [
		{
			description:
				"Experience in Cloud Computing technologies, scripting languages (JSON, Python, RoR, etc), integrating 3rd party monitoring tools, encryption tools, and forensics. Implementation experience with enterprise security solutions such as WAF, IPS, Anti-DDOS, and SIEM.",
			title: "Principal Security Consultant",
			image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
			type: "external",
			publication_date: "2021-08-04T00:04:04Z",
			id: 5690411,
			location: "Berlin, Germany",
			level: "senior",
			tags: [],
			company: {
				id: 12090,
				short_name: "amazon",
				name: "Amazon",
			},
		},
	];

	try {
		// const jobs = await job.find().sort({ updatedAt: -1 });

		res.status(200).json(formatResponse(jobs));
	} catch (error) {
		sendError(res, error);
	}
};

export const show = async (req, res) => {
	const job = await Job.findById(req.params.id);

	if (job) res.json(formatResponse(job));
};
