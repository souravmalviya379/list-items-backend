import ListItemModel from "../models/listItem.model.js";
import { STATIC_IMAGE_PATH } from "../utils/constants.js";

export const addListItem = async (req, res) => {
	try {
		const { title, description, qty, price, date } = req.body;
		const newListItem = new ListItemModel({
			title,
			description,
			qty,
			price,
			date: new Date(date).toLocaleDateString("en-US"),
		});

		if (req.file) {
			// console.log("req.file", req.file);
			newListItem.image = `${STATIC_IMAGE_PATH}/${req.file.filename}`;
		}

		await newListItem.save();

		return res.status(201).json({
			message: "List Item added successfully",
			newListItem,
		});
	} catch (error) {
		console.log("Error while adding list item : ", error);
		return res.status(500).json({
			message: "Something went wrong while adding list item",
		});
	}
};

export const getListItems = async (req, res) => {
	try {
		console.log("req.query", req.query);
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		const { date, title } = req.query;
		const filter = {};
		if (date) {
			filter.date = new Date(date).toLocaleDateString("en-US");
		}
		if (title) {
			filter.title = { $regex: title, $options: "i" };
		}
		const list = await ListItemModel.aggregate([
			{ $match: filter },
			{ $skip: (page - 1) * limit },
			{ $limit: limit },
		]);

		const totalListItems = await ListItemModel.countDocuments(filter);
		const totalPages = Math.ceil(totalListItems / limit);
		return res.status(200).json({
			list,
			totalListItems,
			page,
			limit,
			totalPages,
			hasNextPage: totalPages > page,
			hasPreviousPage: page > 1,
		});
	} catch (error) {
		console.log("Error while getting list items : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching list items",
		});
	}
};
