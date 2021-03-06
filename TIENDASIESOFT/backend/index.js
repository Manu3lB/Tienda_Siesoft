import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";

//Segunda parte
import product from "./routes/product.js"

dotenv.config();

const app = express();
app.use(express.json());
//Reglas de conexión entre front y back
app.use(cors());
//Segunda parte
app.use("/api/product", product);
app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();
