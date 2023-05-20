//epres js 
const express=require('express');
const app=express();//server bnarha hai expresss ka
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/reg",(req,res)=>{
    res.send("<h1>registration</h1>")
})
app.listen(5000,()=>{
    console.log("express server is working  ");
});