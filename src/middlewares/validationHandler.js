import { validationResult } from "express-validator";

function errorFormatter(errors) {
	// console.log(errors)
	if (!errors.isEmpty()) {
		// console.log(errors)
		const errMessages = [];
		errors.array().map((err) => {
			const errMsg = {};
			errMsg[err.path] = err.msg;
			errMessages.push(errMsg);
		});
		// console.log(errMessages)
		return errMessages;
	}
}

export default function validationHandler(req, res, next) {
	const errors = validationResult(req);
	const errorMessages = errorFormatter(errors);
	if (errorMessages && errorMessages.length) {
		return res.status(400).json({
			message: "Validation errors",
			errorMessages,
		});
	}
  next();
}
