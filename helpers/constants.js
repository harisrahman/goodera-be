// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
export const LOG_LEVELS = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
};

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
export const LOG_LEVEL_COLORS = {
	error: "red",
	warn: "yellow",
	info: "green",
	http: "magenta",
	debug: "white",
};

export const isDevelopmentEnv = () => {
	const env = process.env.NODE_ENV || "development";
	return env === "development";
};