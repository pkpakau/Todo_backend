


const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const userController=require("./controllers/userController");

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Start page");
})


app.listen(port,()=>{
    console.log(`Server starated at port :${port}`);
})
module.exports=app;
