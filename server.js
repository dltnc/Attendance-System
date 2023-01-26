const express = require('express');
const connectDB = require('./db');
const jwt = require('jsonwebtoken');
const authenticate = require('./middleware/authenticate');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);


app.get('/private', authenticate, async (req, res) => {
    console.log('I am the user', req.user);
    return res.status(200).json({ message: 'I am a private route' });
});

app.get('/public', (req, res) => {
    return res.status(200).json({ message: 'I am a public route' });
});

app.get("/", (_req, res) => {
    res.send("Thank you for your request");
});

app.use((err, req, res, next) => {
    console.log(err);
    const message = err.message ? err.message : 'Server Error Occurred.';
    const status = err.status ? err.status : 500;
    res.status(status).json({ message });
});
connectDB("mongodb://localhost:27017/attendance-db", {
    serverSelectionTimeoutMS: 1000,
})
    .then(() => {
        console.log("Database Connected");
        app.listen(4444, () => {
            console.log("Database Connected on port 4444");
        });
    })
    .catch((e) => {
        console.log(e);
    });
