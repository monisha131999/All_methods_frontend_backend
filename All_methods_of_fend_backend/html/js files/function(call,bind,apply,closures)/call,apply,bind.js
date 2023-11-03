// //call method()

// function add(){
//     console.log(this.fname+this.lname);
// }
// const tom={
//     fname:"monisha",
//     lname:"palanivel",
// }
// add.call(tom)//call method
// // add.apply(tom)//apply method

// //apply method()
// function add(age,DOB){
//     console.log(this.fname+this.lname + age +DOB);
// }
// const tom1={
//     fname:"monisha",
//     lname:"palanivel",
// }
// add.call(tom1,24,"13081999")
// add.apply(tom1,[24,"13081999"])//dynamic ahh age .dob call pani erukom

//apply method() using index value

function add(age,DOB){
   console.log (box2[0]+ box2[1] + age +DOB);
}
const box2 = ["monisha","palanivel","manoj"]

add.call(box2)
// add.apply(box2,24,["13081999"])

// const box1 = {
//     fname:"monisha",
//     lname:"palanivel",
//     myinfo:function(){
//         console.log(this.age + " :" +this.DOB);
//     }

// }
// const box = {
//     age:24,
//     DOB:"13081999"

// }

// const value = box1.myinfo.bind(box)
// value()//bind method

// //closures method
// myfunction();
// function myfunction(){
//     let a=6;
// document.getElementById("demo").innerHTML=a*a;
// }
// //strict mode 

// "use strict";
//   x=3.5;
// console.log(x);

