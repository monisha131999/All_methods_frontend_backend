var text=document.getElementById("text")
const val=document.querySelector('input');
val.addEventListener("input",()=>{
console.log(val.value);
text.style.color=val.value
text.style.fontSize=val.value
})