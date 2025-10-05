require('dotenv').config(); // load .env variables
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection using Railway URL
const db = mysql.createConnection(process.env.MYSQL_URL || 'mysql://root:VQzNBravIdVXItxSWRTgZLjhABsAZaGV@mysql.railway.internal:3306/railway');

db.connect(err => {
    if(err){
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to Railway MySQL successfully!');
    }
});

// API endpoint to save contact form
app.post('/contact', (req, res) => {
    const { name, email, contactNo, message } = req.body;

    const sql = `INSERT INTO contacts (name, email, contact_no, message) VALUES (?, ?, ?, ?)`;
    db.query(sql, [name, email, contactNo, message], (err, result) => {
        if(err){
            console.error(err);
            res.status(500).send({ message: 'Database error' });
        } else {
            res.status(200).send({ message: 'Message sent successfully!' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
