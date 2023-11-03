class Anbu {
constructor(){
        this.name="monisha"
        this.age=24
        this.place="Namakkal"
    }

}

class Rezula extends Anbu{
    constructor(){
    super()
    }
   moni(){
        return `my name is ${name} my age is ${age} i'm from ${place}`
    }
}
const Obj = new Rezula();
console.log(Obj.moni());
//extends method parent class la eruthu object ahh vangi child class la use panurathu




class Palanivel{
    constructor(name,age,place){
        this.name="monisha"
        this.age=24
        this.place="Namakkal"
    }


}
class Monisha extends Palanivel{
    constructor(){
    super()
    }
    static moni(){
        return `my name is ${name} my age is ${age} i'm from ${place}`
    }
}
const Obj1 = new Monisha();
console.log(Obj1.moni());//ethu first method
// console.log(Monisha.moni());
//epo enga static kuthu datas ahh parent class la eruthu call panurom so call agathu pathicular function kyla eruthu than call agum (static la)




class Palani{
    constructor(name,age,place){
        this.name="monisha"
        this.age=24
        this.place="Namakkal"
    }


}
class Nisha extends Palani{
    constructor(){
    super()
    }
    static moni(){
        return `this is my website`
    }
    
}
//second method
console.log(Nisha.moni());//static method (ethula static keyword use pani parent class la erukura object ahh call pana mudiyathu call panunalum varathu (athuvey same function kula namba contents ahh call panuna varum))
//epo ethula same function nisha kula static use pani contents kuduthu create pani erukom so print aguthu





























// const Obj = new Some("monisha",24,"namakkal");
// console.log(Obj.moni());

// const Obj1 = new Some("mathankumar",23,"erode");
// console.log(Obj1.moni());