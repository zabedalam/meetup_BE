const express=require("express")
const userRoute=require("./src/routes/user")
const eventRoute=require("./src/routes/event")
const mongooseConnection = require("./src/db/mongoose");
const bodyParser = require("body-parser");


require("dotenv").config()
const server=express()

port=process.env.PORT||4000
mongooseConnection();
// app.use(cors());
server.use(bodyParser.json());

server.use("/user",userRoute)
server.use("/event",eventRoute)

server.get("/",(req,res)=>res.send("Hello world"))
server.listen(port,()=>console.log(`I am listening ${port}`))
