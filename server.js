const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('../community-center/backend/middleware/logger');
const connectDB = require('./config/db');

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log('server running on port ${PORT}'));