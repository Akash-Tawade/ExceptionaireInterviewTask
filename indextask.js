const express = require('express');
const { mongoose } = require('/db.js');

const app = express();

app.use();

app.listen(3002 ,() => console.log("Server connected at 3002"));

module.exports = app;