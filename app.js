const testRoute = require('./routes/testRoute');
const express = require('express');  
const app = express();

app.use(express.json());
app.use('/api', testRoute);

module.exports = app;
