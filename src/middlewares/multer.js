import path from "path";
import multer, { diskStorage } from "multer";
// import path from 'path'

const storage = diskStorage({
	destination: function (req, file, cb) {
		cb(null, `./public/images`);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = "ListItem-" + Date.now();
		cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
	},
});

export const upload = multer({ storage: storage });
