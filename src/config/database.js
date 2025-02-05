const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_KEY
    )
};

module.exports = connectDB;