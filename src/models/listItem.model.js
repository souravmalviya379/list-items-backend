import mongoose from "mongoose";
const listItemSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		qty: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		image: {
			type: String,
			// required: true,
		},
	},
	{ timestamps: true }
);

const ListItem = mongoose.model("ListItem", listItemSchema);
export default ListItem;
