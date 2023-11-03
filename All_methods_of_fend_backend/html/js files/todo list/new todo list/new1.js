const todoText=document.getElementById("todo-text");
const todoul=document.getElementById("todo-ul");


function addTask() {
    // console.log(todotext.value);
   if(todoText.value.trim() ==='') {
    alert('Enter some text');
} else {
    console.log(todoText.value.trim());
    const liTag =document.createElement('li');
    const spanText =document.createElement('span');
    const textNode =document.createTextNode(todoText.value.trim());
    spanText.appendChild(textNode);

    //span la erukura text ahh touch panuna checked symbol varanum

    spanText.addEventListener('click',(e)=>{
        // console.log(e.target);
        e.target.classList.toggle('done');

    })

    //create the spanclose element
    const spanClose =document.createElement('span');
    //create a class list for span close 
    spanClose.classList.add('close');
    //create a innerhtml for span close
    spanClose.innerHTML= '&times;';

    //span close ku add event listener kuduthu (click panuna remove aganum atha create pananum)
    
    spanClose.addEventListener('click',(e)=>{
        console.log(e.target.parentElement);
        const li=e.target.parentElement;
        li.parentElement.removeChild(li);
});

    //add the 2span element into li tags
    liTag.appendChild(spanText);
    liTag.appendChild(spanClose);

    //then added the link tag into ul tag using(appendchild)
    todoul.appendChild(liTag);
    todoText.value= '';



}


}



























































// var myDIV=document.getElementById("myDIV")
// console.log(myDIV);
// var todo=document.getElementById("todo")
// console.log(todo);
// var addBtn=document.getElementById("addBtn")
// console.log(addBtn);

// addBtn.addEventListener("click",()=>{
//  nisha.innerText=todo.value;
// console.log(nisha.value);
// })
// const div=document.createElement("div")
// var nisha=document.getElementById("nisha")
// div.setAttribute("id","nisha");
// console.log(nisha);