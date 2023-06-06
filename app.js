const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
dotenv = require('dotenv').config();



const server = http.createServer(app); //create server

app.use(bodyParser.json());
//database connection
// const db_uri = "mongodb://127.0.0.1:27017/blog" //import routes
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL).then(() => console.log('Connected!'))


app.use("/v1/api", require("./routes/api"));


server.listen(5000,()=>{
    console.log("server is runing at 5000")
    // console.log(process)
})