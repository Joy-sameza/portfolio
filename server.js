require('dotenv').config();
const port = parseInt(process.env.PORT) || 3100;

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.get('/hello', (req, res) => {
    res.end('Welcome');
});

app.listen(port, () => console.log(`Listening for request on port ${port}`));