import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { connectDb } from "./config/db.config";

const app: Application = express();

app.use(express.json());
app.use(cors());

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
