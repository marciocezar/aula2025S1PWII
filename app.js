const express = require('express');  
const app = express();
const sequelize = require('./config/config');
const testRoute = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/api', testRoute);
app.use('/api', userRoute);

sequelize.sync().then(
    () => {console.log('Databse connected and synced');}
).catch(
    (error) => {console.log('Error database: ', error);}
);

module.exports = app;
