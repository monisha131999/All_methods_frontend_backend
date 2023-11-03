fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
    //   .then(json => console.log(json))
    .then(  (data)=>{
        data.map(function(data){
            console.log(data.title);

            let p=document.createElement("p");
            let h3=document.createElement('h3');
            var div=document.createElement('div');


            //  div.setAttribute('id',user);
              div.innerHTML=data.id + '<br />'+data.price + data.rating;
              h3.innerHTML=data.title;

              p.innerHTML=data.description +'<br />' + data.category ;
              div.style.color="blue";
              p.style.fontStyle="italic";

              document.body.appendChild(div);
              document.body.appendChild(h3);
              document.body.appendChild(p);
    
              let img=document.createElement('img');
              img.setAttribute('src',data.image);
      
              document.body.appendChild(img);
      




        })


    })