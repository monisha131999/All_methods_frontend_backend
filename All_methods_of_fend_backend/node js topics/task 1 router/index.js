const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParser = bodyparser.urlencoded({extended:false})

app.get('/view',(req,res)=>{
res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/view',urlencodedParser,(req,res)=>{
 console.log(req.body);
});

     app.get('/*',(req,res)=>{
            setTimeout(()=>{
                res.sendFile(path.join(__dirname, '404 error page.html'));
            },3000)
    })

app.listen(3000,() => {
console.log("Server is running ");
})


//file create panurom

const fs = require('fs');
fs.writeFile('index.txt','',(err)=>{
if(err) throw err;
console.log('File created');
})
// //4.Fs-appendfile
// const fs = require('fs');
fs.appendFile('index.txt','This is my new website',(err)=>{
if(err) throw err;
console.log('File append');
})


























// const express= require('express')
// const app =express();
// const path=require('path')
// app.get('/view',(req,res)=>{
// res.sendFile(path.join(__dirname,index.html));
// })
// app.listen(3000,()=>{
//     console.log("server is running");
// })
    // res.send(`<h1>Fname:${req.body.fname}</h1> <br><h1>Lname:${req.body.lname}</h1> <br><h1>phone:${req.body.phone}</h1>`);

// app.get('^/$|/home',(req,res)=>{
//     res.send("home")
//     })
// app.get('/main',(req,res)=>{
//         res.send("main")
//         })
 