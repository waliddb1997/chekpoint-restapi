// import express
const express = require('express');



const connectDB = require('./config/connectDB');

// initialize express app

const app=express();

// config de env
require('dotenv').config()

connectDB()
// creation middelware

app.use(express.json())
app.use("/users",require("./routes/users"))

const port =process.env.PORT

// creation de server
app.listen(port,(err)=>err?console.log(err):console.log("server is running on port " + port));

