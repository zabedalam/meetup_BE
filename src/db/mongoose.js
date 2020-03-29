require("dotenv").config()
const mongoose=require("mongoose")
const mongooseConnection=()=>{
    mongoose.connect(process.env.MONGO_SRV,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("DB Connected")
    },
    err=>{
        console.log(err.reason)
    })
}

module.exports=mongooseConnection