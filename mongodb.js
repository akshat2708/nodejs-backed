const express=require('express')
const mongodb=require('mongodb');
const app=express();
const mongoose=require('mongoose');

const M=mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"practice"})
.then((s)=>console.log("server is connected"))
.catch((e)=>console.log("error"))
module.exports=M;

