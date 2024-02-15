import "dotenv/config";
import express from "express";
import connectDB from "./config/connectDB.js";
const app = express();
const port = process.env.PORT;
import listRouter from "./routes/list.route.js";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
	res.send("Welcome to Nodejs application");
});

app.use("/public", express.static("./public"));

app.use("/list", listRouter);

app.listen(port, (err) => {
	if (err) {
		console.log("Error while starting server : ", err);
		return;
	}
	console.log(`Server is running at port ${port}`);
	connectDB();
});
