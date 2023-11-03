//if statements
let age=18;
if(age>=18){
    console. log("eligible to vote");
}
//if else statements

let age1=18;
if(age1>=18){
    console. log("eligible to vote");
}
else{
    console.log("not eligible to vote");
}
//else if  statements
let mark=12;
if (mark>=90 && mark<=100){
    console.log("A GRADE");
   }
   else if(mark>=80 && mark<=89){
       console.log("B GRADE");
   }
   else if(mark>=70 && mark<=79){
       console.log("C GRADE");
   }
   else if(mark>=35 && mark<=69){
       console.log("D GRADE");
   }
   else{
       console.log("fail");
   }
//switch statements
let year=1;
switch(year)
{
    case 1:
       {
        console.log("janaary");
       }
    case 2:
       {
        console.log("feb");
       }
    case 3:
       {
        console.log("march");
       }
    default:
    {
        console.log("invalid year");
    }
}
//using break statements
let year1=1;
switch(year1)
{
    case 1:
       {
        console.log("janaary");
        break;
       }
    case 2:
       {
        console.log("feb");
        break;
       }
    case 3:
       {
        console.log("march");
        break;
       }
    default:
    {
        console.log("invalid year");
    }
}
//looping(while looping)
let n=10;
while(n>=1){
    console.log(n);
    n--;
}
//do while loop
let i=0;//declare
do {
    console.log(i);
    i++;//increments
}while(i<=10);//condition
//for loop
let b=0
for(let b=0;b<=10;b++){
    console.log (b);
}
//for in objects
let person={
     name:"moni",
     age:24,
     hobby:"drawing",
     isAlive:true
 }
 for(let index in person){
     console.log(index);
 }

 let person1={
    name:"moni",
    age:24,
    hobby:"drawing",
    isAlive:true
}
for(let index in person1){
    console.log(person1[index]);
}
let person2={
    name:"moni",
    age:24,
    hobby:"drawing",
    isAlive:true
}
for(let index in person2){
    console.log(index+":"+person2[index]);
}
// another example(for in arrays)
let num=[12,67,89,56,34];
for(let index in num){
    console.log(index+":"+num[index]);
}
// for of arrays
let num1=[12,67,89,56,34];
for(let x of num1){
    console.log(x);
}
//for in arrays
let num2=[12,67,89,56,34];
for(let x in num2){
    console.log(x);
}


