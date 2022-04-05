const express = require('express');
const app = express();
const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.3wtmc.mongodb.net/ekaly?retryWrites=true&w=majority',
//     {
//         useMongoClient: true
//     }
// );
// mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.status(200).json({
        message: "It works!"
    })
});

module.exports = app;