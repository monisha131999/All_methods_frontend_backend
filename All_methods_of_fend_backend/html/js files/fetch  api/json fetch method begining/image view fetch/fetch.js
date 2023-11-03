fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then (   (data)=>{
        data.map(function(data){

        console.log(data.image);

        let img=document.createElement('img');
        img.setAttribute('src',data.image);

        document.body.appendChild(img);
  

        })

      })