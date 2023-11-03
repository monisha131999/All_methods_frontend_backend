//first type method of class

class Box{
   
   
    constructor(){
      
      this.name = "monisha"
      this.age=24
      
    }
    
    Box1(){
      return `Hi i'm ${this.name}`
      
    }
    
    
    
  }
 const Obj = new Box() // object create 
 
 console.log(Obj)

 //second type method of class

class Box2{
   
   
    constructor(name,age){
      
      this.name = name
      this.age=age
      
    }
    
    Box3(){
      return `Hi i'm ${this.name}`
      
    }
    
    
    
  }
 const Obj1 = new Box2("monisha","24") // object create 
 
 console.log(Obj)

//third type
class Box4{
   
   
    constructor(name,age){
      
      this.name = "monisha"
      this.age=24
      
    }
    
    Box5(){
      return `Hi i'm ${this.name}`
      
    }
    
    
    
  }
 const Obj2 = new Box4() // object create 
 
 console.log(Obj2.Box5())

//prompt use pani class ahh call panurathunu pakkkalam
Name =prompt("enter the name")
Age= prompt("enter the age")
all=`Hi i'm ${Name} My age is${Age}`
console.log(all);





