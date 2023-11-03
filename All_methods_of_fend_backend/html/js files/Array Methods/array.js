//length of arrays
const fruits = ["Apple", "Mango", "jerry", "Banana"];
let size=fruits.length;
console.log(fruits.length);
//toString()method
const fruits1= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits1.toString());
//join()method
const fruits2= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits2.join("*"));
//pop()method
const fruits3= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits3.pop());
//push()method
const fruits4= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits4.push("orange"));
//shift() method
const fruits5= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits5.shift());
//unshift() method
const fruits6= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits6.unshift("lemon"));
// changing elements
const fruits7= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits7[0]="kiwi");
//delete() method
const fruits8= ["Apple", "Mango", "jerry", "Banana"];
console.log(fruits8[1]);
//concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log( myGirls.concat(myBoys));
//flat() method
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr.flat());
//slicing & splice method 
//splice method
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits9.splice(2, 0, "Lemon", "Kiwi"));
//removed splice 
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits10.splice(0, 1));

//slicing
const fruits11 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits11.slice(1);
console.log(fruits11.slice(1));














