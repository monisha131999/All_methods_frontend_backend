const express=require('express');
const app=express()
const path=require('path')
const mongoose=require('mongoose');
const Schema=require('./schema');

mongoose.connect('mongodb://127.0.0.1:27017/mathan')
.then(()=>{
    console.log("Db connected successfully");
}).catch(()=>{
    console.log("Db not connected");
})

//middle ware use pananum
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/post',(req,res)=>{
    const data=new Schema({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        phonenumber:req.body.phonenumber
    })

    data.save().then(()=>{
        res.json({
            msg:"data saved successfully"
        })
    })
})

app.get('/get',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'));
})
app.get('/*',(req,res)=>{
    setTimeout(()=>{
        res.sendFile(path.join(__dirname,'404 error page.html'));

    },4000)
})

app.listen(4000,()=>{
    console.log("server is running");
})