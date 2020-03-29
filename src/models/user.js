const mongoose=require("mongoose")
const Schema=mongoose.Schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        default:"https://via.placeholder.com/300"
    },
    aboutme:{
        type:String
    }
})

module.exports=mongoose.model("User",userSchema)