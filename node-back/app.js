const express = require('express');
const app = express();

app.get("/", (req, next) => {
    res.json({message: "Hello World!"});
});