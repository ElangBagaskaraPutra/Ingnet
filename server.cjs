const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IA_CS'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

app.use(cors());

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Query to check if the username and password match
    const query = 'SELECT * FROM users WHERE username = ? AND password = ? AND finish = *';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (results.length > 0) {
            // Login successful
            const user = results[0];
            // Fetch completed tasks for the user
            const completedTasksQuery = 'SELECT task_number FROM completed_tasks WHERE user_id = ?';
            connection.query(completedTasksQuery, [user.id], (err, tasksResults) => {
                if (err) {
                    console.error('Error executing MySQL query: ' + err.stack);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
                const completedTasks = tasksResults.map(result => result.task_number);
                res.json({ success: true, message: 'Login successful', completedTasks });
            });
        } else {
            // Invalid credentials
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    });
});
