"use strict";
require('dotenv').config();     // fichiers dotenv

// Express
const express = require('express');
const app = express();
const cors = require("cors");   // cors

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));      // body parser

// Routes
const authRoute = require('./routers/auth');


app.use('/auth', authRoute);




// Server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Node.js server listenning on port : ${server.address().port}`);
});

// console.log(process.env.PORT);
