import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("server started on PORT : " + port));
