const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
dotenv = require('dotenv').config(); //use to secure to push in github 
const cors = require("cors");

const server = http.createServer(app); //create server


app.use(express.static(__dirname + '/public')); //to get image

app.use(bodyParser.json());
//database connection
// const db_uri = "mongodb://127.0.0.1:27017/blog" //import routes
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL).then(() =>  //in process link is in env file
{console.log('Connected!')})


app.use("/v1/api",cors, require("./routes/api"));


server.listen(5000,()=>{
    console.log("server is runing at 5000")
    // console.log(process)
})