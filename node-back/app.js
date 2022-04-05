const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dbUser:dbUserPassword@cluster0.3wtmc.mongodb.net/ekaly?retryWrites=true&w=majority", {
    useMongoClient: true
})

app.use((req, res, next) => {
    res.status(200).json({
        message: "It works!"
    })
});

module.exports = app;