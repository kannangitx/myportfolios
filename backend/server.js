import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MySQL Connection (Clever Cloud)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to Clever Cloud MySQL successfully!");
  }
});

// ✅ Test route to confirm backend is working
app.get("/api", (req, res) => {
  res.json({ message: "Backend is working fine!" });
});

// ✅ Handle contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, contact_no, message } = req.body;

  if (!name || !email || !contact_no || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const sql =
    "INSERT INTO contacts (name, email, contact_no, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, contact_no, message], (err, result) => {
    if (err) {
      console.error("❌ Database insert error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ success: true, message: "Data saved successfully!" });
  });
});

// 🧩 Serve React frontend (from src/build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the React build folder
app.use(express.static(path.join(__dirname, "../src/build")));

// For any other route, send React's index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/build", "index.html"));
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
