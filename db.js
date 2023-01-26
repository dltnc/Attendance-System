const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

function connectDB(connectionStr) {
    return mongoose.connect(connectionStr);
}

module.exports = connectDB;