const express = require('express');  
const app = express();
const testRoute = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/api', testRoute);
app.use('/api', userRoute);

module.exports = app;
