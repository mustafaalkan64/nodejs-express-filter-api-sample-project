const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_CONNECTION_STRING = "mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study";

mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(api);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port.`);
});