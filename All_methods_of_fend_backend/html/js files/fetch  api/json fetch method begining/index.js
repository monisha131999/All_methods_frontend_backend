fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(  (user)=>{

        user.map(function(user){
        console.log(user.title);
        let p=document.createElement("p");
        let h3=document.createElement('h3');
        var div=document.createElement('div');
        //  div.setAttribute('id',user);
          div.innerHTML=user.userId + '<br />'+user.id;
          h3.innerHTML=user.title;
          p.innerHTML=user.body;
          div.style.color="blue";
          p.style.fontStyle="italic";
          document.body.appendChild(div);
          document.body.appendChild(h3);
          document.body.appendChild(p);


          })
        })
        
      // function user(){
      //   var div=document.createElement('div');
      //   div.setAttribute('id',moni);
      //   div.innerHTML=user.userid + '<br />'+ user.id + user.title +user.body;
      //   document.body.appendChild(div);
      // }
   

