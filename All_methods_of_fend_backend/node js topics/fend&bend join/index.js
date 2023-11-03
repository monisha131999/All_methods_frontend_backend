const exprees = require('express')
const app = exprees();
const bodyparser = require('body-parser')
const urlencodedParser = bodyparser.urlencoded({extended:false})
app.post('/home',urlencodedParser,(req,res)=>{
    // res.send(`<h1>Fname:${req.body.fname}</h1> <br><h1>Lname:${req.body.lname}</h1> <br><h1>phone:${req.body.phone}</h1>`);
   console.log(req.body);
});
app.listen(8000,()=>{
    console.log("server is running");
})