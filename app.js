const express = require('express');  
const app = express();
const sequelize = require('./config/config');
const testRoute = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoutes');   ///********

app.use(express.json());
app.use('/api', testRoute);
app.use('/api', userRoute);
app.use('/api', authRoute);  ///********

sequelize.sync().then(
    () => {console.log('Databse connected and synced');}
).catch(
    (error) => {console.log('Error database: ', error);}
);

module.exports = app;

