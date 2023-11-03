// //server create panurom 
const express=require('express');
const app=express();

const mongoose=require('mongoose');//mongoose connect panurom database oda
const Schema=require('./schema')//schema create panurom

mongoose.connect('mongodb://127.0.0.1:27017/Murugan')
.then(()=>{
    console.log("Db connected successfully");
}).catch(()=>{
    console.log("DB not connected");
})

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.post('/post',(req,res)=>{
    const data=new Schema({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        phonenumber:req.body.phonenumber
    })

//save pananum data va
data.save().then(()=>{
    res.json({
        msg:"data saved successfully"
        })
   })
})
app.listen(6000,()=>{
    console.log("server is running ");
})


















































//example:

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Schema = require('./schema')
// mongoose.connect('mongodb://127.0.0.1:27017/monisha')
// .then(()=>{
//     console.log("Db conncted successfully");
// }).catch(()=>{
//     console.log("DB not connected");
// })
// app.use(express.json())
// app.post('/post',(req,res)=>{
// const data = new Schema({
//     name:req.body.name,
//     email:req.body.email,
//     age:req.body.age
// })

// data.save().then(()=>{
//     res.json({msg:"data saved successfully"})
// })


// })


// app.listen(5000,()=>{
//     console.log("server is running ");
// })