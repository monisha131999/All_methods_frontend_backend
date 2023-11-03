fetch('https://fakestoreapi.com/products')
.then((data)=>{
    // console.log(data);
 return data.json();

}).then((completedata)=>{
    // console.log(completedata[2].title);
    // document.getElementById('root').
    // innerHTML=completedata[2].title;
    let data1="";
    completedata.map((values)=>{
        data1+=` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;


}).catch((err)=>{
    console.log(err);
})




































// let grid = document.querySelector(".products");
// let filterInput = document.getElementById("filterInput");

// // add event listener
// filterInput.addEventListener('keyup', filterProducts);

// // callback function 
// function filterProducts(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = grid.querySelectorAll('.item')
//     // console.log(filterValue);

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }

//     }
// }







// add eventlistener
// let filterinput=document.getElementById("filterinput");
// filterinput.addEventListener('keyup'.cards);

// filterinput.addEventListener('keyup',()=>{
//  console.log(filterinput.value.toUpperCase());
//  let card=document.querySelectorAll('card')


//  for(let i=0; i<card.length;i++){
//     let h1=card[i].querySelector('.title')

// //     if(h1.innerHTML.toUpperCase().indexOf(filterinput)>-1){
// //         card[i].style.display="initial";
// //     }else{
// //      card[i].style.display="none";
// //     }
// // }

// });


// callback function
// function cards () {
//     let filterValue=filterinput.values.toUpperCase();
//     console.log(filterValue);
//     let card=grid.querySelectorAll('.card')
//     for(let i=0; i<card.length;i++){

//     }

// }



