import { check, param } from "express-validator";

export const validateCreateListItem = [
	check("title")
		.notEmpty()
		.withMessage("title must not be empty")
		.isLength({ min: 3, max: 30 })
		.withMessage("title must be of atleast 3 and atmost 30 characters")
		.isString()
		.withMessage("title must be valid string"),
	check("description")
		.notEmpty()
		.withMessage("description must not be empty")
		.isLength({ min: 10, max: 250 })
		.withMessage("description must be of atleast 10 and atmost 250 characters"),
	check("qty")
		.notEmpty()
		.withMessage("qty must not be empty")
		.isNumeric()
		.withMessage("qty must be valid number"),
	check("price")
		.notEmpty()
		.withMessage("price must not be empty")
		.isFloat()
		.withMessage("Price must be valid decimal number"),
	check("date")
		.notEmpty()
		.withMessage("date field must not be empty")
		.isDate("mm-dd-yyyy")
		.withMessage('Please input date in "mm-dd-yyyy" format'),
];
