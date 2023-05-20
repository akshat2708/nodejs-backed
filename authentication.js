//importing modules
const mongodb=require('mongodb');
const path=require('path');
const express=require('express');
const cookie=require('cookie-parser');
const mongoose=require('mongoose');
const { name } = require('ejs');
const cookieParser = require('cookie-parser');
const jwt=require('jsonwebtoken');
const app=express();

//database connectivity
mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"practice"})
.then(()=>console.log("database connected"))
.catch(()=>console.log("error"));

//using middlewares
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//setting ejs enginge
app.set("view engine","ejs");
//connecting to collections
const user=[];
const sc=new mongoose.Schema({
    name:String,
    email:String,
    number:String


})
const cont=mongoose.model("authentication",sc);





app.get("/logout",(req,res)=>{
    res.render("logout")
});

app.get("/log",(req,res)=>{
    res.render("login");
})

//cookie-parse
app.get("/parser",(req,res)=>{
    const {token}=req.cookies;
    if(token){
        res.redirect("/logout");
    }
    else{
        res.redirect("/log");
    }

     
});

app.post("/logout",(req,res)=>{
    res.cookie("name",null ,{httpOnly:true,expires:new Date(Date.now()) });
    res.redirect("/log")
    
});
app.post("/log",async(req,res)=>{
    const{name,email,number}=req.body;
    const user= await cont.create({name,email,number});
    const token=jwt.sign({_id:user._id},"asdfghdyyttjytjuriuru7jiry");
    
    res.cookie("name",token,{httpOnly:true,expires:new Date(Date.now()+60*1000) });
   
    res.redirect("/logout") 
    
});



app.listen(5000,()=>{
    console.log("on live");
})
