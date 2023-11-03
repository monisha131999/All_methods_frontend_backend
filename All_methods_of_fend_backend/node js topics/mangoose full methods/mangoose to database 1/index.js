const express=require('express');
const app=express();
const path = require('path')
const mongoose=require('mongoose');//mongoose connect panurom database oda
const Schema=require('./schema')//schema create panurom

mongoose.connect('mongodb://127.0.0.1:27017/moni')
.then(()=>{
    console.log("Db connected successfully");
}).catch(()=>{
    console.log("DB not connected");
})//promise return panuthu

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

app.get('/get',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
    })

    app.get('/*',(req,res)=>{
        setTimeout(()=>{
            res.sendFile(path.join(__dirname, '404 error page.html'));
        },2000)
})

    
app.listen(2000,()=>{
    console.log("server is running ");
})













// const express = require('express')
// const app = express()
// const bodyparser = require('body-parser')


// app.post('/post',urlencodedParser,(req,res)=>{
//         // res.send(`<h1>Fname:${req.body.fname}</h1> <br><h1>Lname:${req.body.lname}</h1> <br><h1>phone:${req.body.phone}</h1>`);

//  console.log(req.body);
// });

     
// app.listen(3000,() => {
// console.log("Server is running ");
// })

