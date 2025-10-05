require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection(process.env.MYSQL_URL);

db.connect(err => {
    if(err){
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to Clever Cloud MySQL successfully!');
    }
});

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
