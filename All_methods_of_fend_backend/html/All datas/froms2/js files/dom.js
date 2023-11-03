//id 

function demo1(){
    document.getElementById("demo").innerText="welcome to my chennal";
}

// tag name

function display1(){
    let pick=document.getElementsByTagName("h6");
    document.getElementById("tag").innerText=pick[1].innerText;
}

// class name

function display2(){
    let pick=document.getElementsByClassName("data");
    document.getElementById("change").innerText=pick[3].innerText;
}

// style the tag in js

document.getElementById("menu1").style.color="deeppink";
document.getElementById("menu1").style.fontSize="25px";
document.getElementById("menu1").style.border="2px dotted blue";
document.getElementById("menu1").style.backgroundColor="yellow";

//queryselector

let result=document.querySelector('h6');
console.log(result);
document.getElementById("tag2").innerText=result.innerText;
// query all selectors

function display5(){
    let result=document.querySelectorAll('h6');
    document.getElementById("tag3").innerText=result[0].innerText;
}
// attributes oda value ahh get panurom(already eruntha value ahh namba get panurom)

let result1=document.getElementById("input").Placeholder;
console.log(result1);

// new ahh attributes(set panurom) um athoda values um namba puthusa kudukurom 

let input=document.getElementById("input");
console.log(input);
input.setAttribute("value","Abumoni");
console.log(input);
