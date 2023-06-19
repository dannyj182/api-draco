import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8081;
const URI = process.env.URI || "mongodb://localhost:27017";
const DB = process.env.DB || "MONGO";
const BASE = process.env.BASE || "draco-openiot";

export default {
  PORT,
  URI,
  DB,
  BASE,
};