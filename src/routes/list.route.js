import express from "express";
import { addListItem, getListItems } from "../controllers/list.controller.js";
import { validateCreateListItem } from "../middlewares/validationRules.js";
import validationHandler from "../middlewares/validationHandler.js";
import { upload } from "../middlewares/multer.js";
const router = express.Router();

router.get("/", getListItems);

router.post(
	"/add",
	upload.single("image"),
	validateCreateListItem,
	validationHandler,
	addListItem
);
export default router;
