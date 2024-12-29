const  express  = require('express');
const sequelize  = require('./config/db');
const { connectToDatabase } = require('./config/db');
const app = express();
require('dotenv').config();

const {syncTables} = require('./models/index');

app.use(express.json());

const PORT = process.env.PORT || 3000;

try {
    connectToDatabase();
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}