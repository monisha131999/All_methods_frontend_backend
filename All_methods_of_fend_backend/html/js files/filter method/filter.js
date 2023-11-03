//filter method

let person =[
    {name:"Monisha",age:24,gender:"female",degree:"B.E(cse)"},
    {name:"Prabu",age:33,gender:"male",degree:"B.E(EEE)"},
    {name:"Anbu",age:51,gender:"female",degree:"Bsc"},
    {name:"Manoj",age:30,gender:"male",degree:"DEEE"},
    {name:"Prasanth",age:29,gender:"male",degree:"Bsc"}, 
    {name:"logeshwari",age:27,gender:"female",degree:"B.E(B.Tech)"}, 
    {name:"palanivel",age:55,gender:"male",degree:"M.A,B.ED,M.phil,poltical science"}, 
    {name:"keerthivarman",age:23,gender:"male",degree:"B.E(cse)"}, 
    {name:"Arunprasanth",age:22,gender:"male",degree:"B.E(cse)"}, 
    {name:"karthika",age:22,gender:"female",degree:"B.E(cse)"}, 
    {name:"abitha",age:21,gender:"female",degree:"B.E(cse)"}, 
    {name:"tamilarasi",age:22,gender:"female",degree:"B.E(cse)"}, 



    ]
  
  
    var datas = person.filter((data)=>{
    return data
  })
    console.log( datas);

//another method to call the paticular items
var datas = person.filter((data)=>{
    return data.name =="palanivel"
  
    })
    console.log( datas);


//map method

let value = person.map((data)=>{
    return data.degree.toUpperCase()

  })

  console.log(value);

//another method of map using calculating method

const box = [2,3,5,1,4,7]


 const sum =  box.map((value)=>{
  return value * 2 ;
})

console.log(sum)


const box1 = [323,696,420,900,400,650]


 const sum1 =  box1.map((value)=>{
  return value / 5 ;
})

console.log(sum1)

//find method

let value1 = person.find((data)=>{
    return data.gender=="male"
  })
  console.log(value1);
  
//for each() method

  let value2= person.forEach((data)=>{
    console.log(data.age);

  })






