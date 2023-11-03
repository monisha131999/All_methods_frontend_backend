let fname=document.getElementById("fname");
// console.log(fname);
let lname=document.getElementById("lname");
// console.log(lname);
let phone=document.getElementById("phone");
// console.log(phone);
let email=document.getElementById("email");
// console.log(email);
let sub=document.getElementById("sub")
// console.log(sub);
let btm=document.getElementById("btm");
 console.log(btm);
// let ul=document.getElementById("ul")
// console.log(ul);

sub.addEventListener("click",()=>{
    localStorage.setItem("fname","Monisha")
    localStorage.setItem("lname","palanivel")
    localStorage.setItem("phone","9994048621")
    localStorage.setItem("email","monianbu380@gmail.com")

})
console.log(localStorage.getItem("fname"));
console.log(localStorage.getItem("lname"));
console.log(localStorage.getItem("phone"));
console.log(localStorage.getItem("email"));


console.log(sub);

sub.addEventListener("click",()=>{
    console.log(fname.value);
    console.log(lname.value);
    console.log(phone.value);
    console.log(email.value);
    })

var moni=document.getElementById("moni")

const textNode =document.createTextNode((localStorage.getItem("fname")));
const textNode1=document.createTextNode((localStorage.getItem("lname")));
const textNode2=document.createTextNode((localStorage.getItem("phone")));
const textNode3=document.createTextNode((localStorage.getItem("email")));

btm.addEventListener("click",()=>{
var para=document.createElement("para")
var para1=document.createElement("para1")
var para2=document.createElement("para2")
var para3=document.createElement("para3")

var fname=localStorage.getItem("fname")
var lname=localStorage.getItem("lname")
var phone=localStorage.getItem("phone")
var email=localStorage.getItem("email")

para.innerText="fname"+":"+fname;
para1.innerText="lname"+":"+lname;
para2.innerText="phone"+":"+phone;
para3.innerText="email"+":"+email;

moni.appendChild(para);
moni.appendChild(para1);
moni.appendChild(para2);
moni.appendChild(para3);

para.appendChild(li1);
para1.appendChild(li2);
para2.appendChild(li3);
para3.appendChild(li4);

}) 

var li1=document.getElementById("li1")
var li2=document.getElementById("li2")
var li3=document.getElementById("li3")
var li4=document.getElementById("li4")


var remove=document.getElementById("remove")
remove.addEventListener("click",()=>{
moni.innerText=localStorage.removeItem("fname")
moni.innerText=localStorage.removeItem("lname")
moni.innerText=localStorage.removeItem("phone")
moni.innerText=localStorage.removeItem("email")
moni.innerText="";


})























// console.log(li1);
// console.log(li2);
// console.log(li3);
// console.log(li4);

// liTag.appendChild(textNode);
// liTag1.appendChild(textNode1);
// liTag2.appendChild(textNode2);
// liTag3.appendChild(textNode3);

// ul.appendChild(liTag);
// ul.appendChild(liTag1);
// ul.appendChild(liTag2);
// ul.appendChild(liTag3);

// console.log(abu);// 
// console.log(moni);
// console.log(remove);
// const abu=document.getElementsByClassName("abu")

//const liTag =document.createElement('li');
// const liTag1 =document.createElement('li');
// const liTag2=document.createElement('li');
// const liTag3=document.createElement('li');



// console.log(textNode);
// console.log(textNode1);
// console.log(textNode2);
// console.log(textNode3);

// console.log(li);
// console.log(liTag);
// console.log(spanText);

// console.log(li1);
// console.log(li2);
// console.log(li3);
// console.log(li4);

// console.log(ul);
// console.log(liTag);
// console.log(liTag1);
// console.log(liTag2);
// console.log(liTag3);





































//