const mongoose=require('mongoose');
const dataschema= new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
        uppercase:true
    },
    Lastname:{
        type:String,
        required:true,
        uppercase:true
    },
    Email:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
        

    },
}) 
module.exports =mongoose.model("Aarupadaividu",dataschema)


// example methods//

//const mongoose = require('mongoose');
// const dataschema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         uppercase:true
//     },
//     age:{
//         type:Number,
//         required:true,
//         min:20,
//         max:50,
//     },
//     email:{
//         type:String,
//         required:true,
//     },

// })
// module.exports = mongoose.model("mathan",dataschema)