var input=document.querySelector("input")
console.log(input);

var some=document.getElementById("some")
 console.log(some);
input.addEventListener("input",()=>{
some.style.backgroundColor=input.value
})

var some=document.getElementById("some")
var task=document.getElementById("task")
task.addEventListener("input",()=>{
    some.style.borderRadius=task.value;
})

var color=document.getElementById("color")
color.addEventListener("input",()=>{
    some.style.color=color.value
})

var range=document.getElementById("range")
range.addEventListener("input",()=>{
    some.style.borderRadius=range.value+"px";
})
    
var width=document.getElementById("width")
width.addEventListener("input",()=>{
    some.style.width=width.value
})
var box=document.getElementById("box")
box.addEventListener("input",()=>{
    some.style.borderColor=box.value
    some.style.borderStyle=box.value
    some.style.borderWidth=box.value+"px"
    
})
 var cars=document.getElementById("cars")
 cars.addEventListener("input",()=>{
   some.style.borderStyle=cars.value
    console.log(cars);

 })