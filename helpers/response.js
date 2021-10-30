export const formatResponse = (data, msg = "", code = 200) => ({
	meta: {
		success: true,
		code,
		msg,
	},
	data,
});

export const formatError = (
	msg = "Something Went Wrong with server",
	errCode = 500
) => ({
	meta: {
		success: false,
		msg,
		code: errCode,
	},
});

export const sendError = (res, error, code = 409) => {
	if (!res.headersSent) res.status(code).json(formatError(error.message));
};
