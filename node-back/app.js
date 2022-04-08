const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const platRoutes = require('./api/routes/plat.route');
const userRoutes = require('./api/routes/user.route');
const authRoutes = require('./api/routes/auth.routes');
const dbConfig = require('./api/config/db.config');
const db = require("./api/models");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.use('/api/plats', platRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);

db.mongoose.connect(
    `mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PWD}@cluster0.3wtmc.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`,{
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  ).then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


app.get("/", (req, res) => {
    res.json({message: "Hello World!"});
});

app.use((req, res, next)=>{
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
       error : {
        message : error.message
       } 
    });
});


module.exports = app;