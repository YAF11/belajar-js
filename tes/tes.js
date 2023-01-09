// function tambah (){
//     let hasil = 0
//     for(let i = 0; i< arguments.length; i++){
//         hasil += arguments[i]
//     }
//     return hasil
// }

// //scope
// let a = 1
// function nama(){
//     let b = 2
    
// }
// nama()
// console.log(b);
let arrMean = []

function addArrMean (...v){
    for(let index in v){

        arrMean.push(v[index])
    }
    return arrMean;
}

function mean (){
    let total = 0
    for(let i = 0; i<arrMean.length; i++){
        total += arrMean[i]
    }
    return total / arrMean.length
}

const orang = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const key = Object.keys(orang).length;
  console.log(key);

  function Person(firstName, lastName){
    // properti
    this.firstName = firstName;
    this.lastName = lastName;

    // method
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.showName = function(){
        document.write(this.fullName());
    }
}

var person1 = new Person("Muhar", "Dian");
var person2 = new Person("Petani", "Kode");

person1.showName();
document.write("<br>");
person2.showName();