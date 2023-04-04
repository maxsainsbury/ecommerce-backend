const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/api', (req, res) => {
    res.json({message: "Connected to server"});
});

app.listen(PORT, () => {
    console.log(`Listening ot Port: ${PORT}`);
})