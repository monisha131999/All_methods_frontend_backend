const ul=document.createElement("ul");
console.log(ul);
 const listEl=document.querySelector('ul')

var data=document.createElement('data');


fetch('./demo.json')
// fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => data)
     .then(data => {
    console.log()
    data.forEach( post => {
        listEl.insertAdjacentElement('beforeend',`<li>${post.title}</li>`);
    });
});



































    // const jsonurl='https://jsonplaceholder.typicode.com/posts'

// console.log(json =>piosData);

// console.log(piosData);
// var piosData=document.createElement('piosData')
// piosData.innerHTML=console.log(json);

// function person(data){
//     const div=document.createElement('div');
//     div.setAttribute('id', data);



