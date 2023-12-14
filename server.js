const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to SQLite database (create file if not exists)
const db = new sqlite3.Database('database.db');

// Create a 'clients' table if not exists
db.run(`
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        clientsServed INTEGER
    )
`);

app.use(bodyParser.json());

app.post('/saveClient', (req, res) => {
    const { name, clientsServed } = req.body;

    // Insert new client into the 'clients' table
    db.run('INSERT INTO clients (name, clientsServed) VALUES (?, ?)', [name, clientsServed], function (err) {
        if (err) {
            console.error('Error:', err.message);
            res.status(500).send('Internal Server Error');
        } else {
            // Send back the ID of the inserted row
            res.json({ _id: this.lastID });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
