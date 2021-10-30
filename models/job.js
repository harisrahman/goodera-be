import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobSchema = new Schema(
	{
		description: String,
		title: String,
		image: String,
		type: String,
		publication_date: String,
		id: Number,
		location: String,
		level: String,
		tags: [
			{
				type: String,
			},
		],
		company: {
			id: Number,
			short_name: String,
			name: String,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("job", jobSchema);
