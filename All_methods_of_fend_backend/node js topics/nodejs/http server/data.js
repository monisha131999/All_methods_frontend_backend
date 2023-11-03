//http server 
const http = require('http');
http.createServer((req,res)=>{
    res.write("<h1>hi im monisha palanivel</h1>");
    res.end()
}).listen(5000,()=>{
    console.log('server is running port 5000');
}).js

//express server
const express = require('express')
const app = express();
app.get('/view',(req,res)=>{
   res.send("my website")
})
app.listen(3000,()=>{
    console.log("server is running port 3000");
})


// http 
// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>yes im monisha</h1>");
//     res.end()
// }).listen(4000,()=>{
//     console.log('server is working');
// }).js



//app.js  (modules in node.js (export))
//export an object/array/function/from a file
const obj = {
    greeting:"hello,world!",
    sayHello:function() {
        console.log(this.greeting);
    }
}
module.exports=obj;

index.js
//modules in node.js (import)

const app =require('./app');
app.sayHello();//print 'hello,world'

//read a file (file system)
const fs=require('fs');
//read file.text and log its data.
fs.readFile('file.text','utf8',(err,data)=>{
    if (err)throw err;
    console.log(data);
});

//writing to a file (file system)
const fs =require('fs');
fs.writeFile('file.txt','hello,world!',(err)=>{
    if(err)throw err;
    console.log('data written to file');
});

//create an http server

const http=require('http');
const server= http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello,world!');
});
server.listen(3000,()=>{
    console.log('server listening on port 3000');
});

// make an http request

const http=require('http');
const options={
    hostname :'Local',
    port:3000,
    path:'1',
    method:'Get'
};
const req =http.request(option,(res)=>{
    console.log('status:${res.statuscode}');
    console.log('headers:{JSON.stringify(res.headers)}');
    res.setEncoding('utf8');
    res.on('data',(chunk)=>{
        console.log('Body:{chunk}');
    });
    res.on('end',()=>{
        console.log('no more data in response');
    });
});
reqon ('error',(e)=>{
    console.error('problem with request:${e.message}');
});

//send the request
req.end();


//next projects

//set project
//npm init-y

//adding script
"script"={"start":"node index.js"};
//install express package
 //npm install express.

 //create a route
 //improtaning package.
 const express=require('express');
 const app=express();
 //adding routes.
 app.get('/book',(req,res)=>{
    res.send([{
        name:'harry patter',
        id:1,
    },
    {
        name:'percy jockson',
        id:2,
    },
  ]);
});
//port
const port=process.env.port||5000;
app.listen(port,()=>{
    console.log('listening on port:${port}');
})
//run the api
//npm start

//creating local module in node js
function add(a,b){
    let sum=a+b;
    return sum;
}
module.exports=add;
//local module in your main application
let add=require('./math');
let result=add(4,3);
console.log('Result is',result);

// third-party module
//npm install colors
const colors=require('colors');
console.log('welcome to geekshelp.in'.red);
console.log('Tap Here to Follow Now'.green);

//file using node js
//see the code to create files using node js,synchronously and asynchronously

//creating file synchronously
const fs=require('fs');
fs.writeFileSync('./test.txt'),'hello lovely people';

//creating file Asynchronously
const fs=require('fs');
fs.writeFileSync('./test.txt'),'Hello Lovely People',(err)=>{
    console.log(err);
}

//reading file synchronously

const fs=require('fs');
const result=fs.readFileSync('./test.txt','utf-8');
console.log(result);

//creating file Asynchronously
const fs=require('fs');
fs.readFile('./test.txt','utf-8',(error,data)=>{
    if (error){
        console.log('error:',error);
    }
   else{
    console.log(data);
   }
});

//append text in file

const fs=require('fs');
fs.appendFileSync('./test.txt','\n this is new text')

//copy the file
const fs=require('fs');
fs.cpSync('./test.txt','./copy.txt')

//delete the file

const fs=require('fs');
fs.unlinkSync('./test.txt');



















