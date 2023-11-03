//node js file system

//1.Fs1 -create folder
const fs = require('fs');
fs.mkdir('./New folder',(err)=>{
if(err) throw err;
console.log("folder created");
})

// 2.Fs- delete folder
const fs = require('fs');
fs.rmdir('./New folder',(err)=>{
if(err) throw err;
console.log("folder deleted");
})
//3.Fs-writefile
const fs = require('fs');
fs.writeFile('index.txt','my name is monisha ',(err)=>{
if(err) throw err;
console.log('File created');
})
//4.Fs-appendfile
const fs = require('fs');
fs.appendFile('index.txt','This is my new website',(err)=>{
if(err) throw err;
console.log('File append');
})
// 5.Fs-deletefile
const fs = require('fs');
fs.unlink('index.txt',(err)=>{
if(err) throw err;
console.log('File deleted');
})



