


const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const userController=require("./controllers/userController.js");
const taskController=require("./controllers/taskController.js");
const app=express();
const port=3000;

app.use('',userController);

app.use('/dashboard',taskController);

app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`Server starated at port :${port}`);
})
module.exports=app;
