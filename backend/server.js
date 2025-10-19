// backend/server.js

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config({ path: "./backend/.env" });

const app = express();
app.use(express.json());

// ===== Database connection =====
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

db.connect((err) => {
  if (err) console.error("❌ Database connection failed:", err);
  else console.log("✅ Connected to database successfully!");
});

// ===== Fix __dirname in ES modules =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Serve React build folder =====
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// ===== Start server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
