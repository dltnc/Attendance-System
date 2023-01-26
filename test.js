const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose
    .connect('mongodb://localhost:27017/test', {
        serverSelectionTimeoutMS: 1000,
})
    .then(() => {
        console.log('Database Connected');
        mongoose.connection.close();
})
    .catch((e) => {
        console.log(e);
});
