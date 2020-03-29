const express=require("express")

const router=express.Router()

router.get("/",(req,res)=>{
    res.send("I am getting all the event")
})

router.post("/",(req,res)=>{
res.send("I can post event")
})

router.put("/",(req,res)=>{
    res.send("I can modify it")
})

router.delete("/",(req,res)=>{
    res.send("I can delete event")
})


module.exports=router