const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
app.get("/",(req,res)=>{
    const dir=path.resolve();
    res.sendFile(path.join(dir,"./rr.html"))
});
app.listen(5000,()=>{
    console.log("file")
})
