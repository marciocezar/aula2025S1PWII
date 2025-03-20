const application = require('./app');
require('dotenv').config();
const PORT = process.env.PORT;
application.listen(  
    PORT, () => {
        console.log(process.env.MSG);
        console.log("PORT: " + PORT);
        console.log(`http://localhost:${PORT}`);
    }
);
