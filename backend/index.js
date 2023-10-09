require('dotenv').config()
const express = require('express')
const {Client} = require('pg')
const path = require('path')
const bodyParser = require('body-parser');

const frontendDirectory = path.join(__dirname, '..', 'frontend');
const indexPath = path.join(frontendDirectory, 'index.html');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"USER1907",
    database:"webProject"
})

client.connect();

port = process.env.PORT || 5000

app.use(express.static(frontendDirectory));

app.post('/',(req, res) => {
    const {username, password} = req.body;
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    const values = [username, password]

    client.query(query, values, (err, result)=>{
        if (!err && result.rows.length>0) {
            res.send('login successful');
        } else {
            res.status(401).send('login failed. Invalid Credentials')
        }
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})