function say() {
  document.writeln("<p> yafi irsyad </p>");
}
say();

let peerson = {
  name: "arul",
  age: 17,
  makan: function () {
    console.log("sedang makan");
  },
};

//ini adalah method
peerson.makan();

// //menjumlahkan 2 volme kubus
// let a = 3;
// let b = 6;
// let volumeA = a * a * a;
// let volumeB = b * b * b;
// let total = volumeA + volumeB;
// // console.log(total);

// function menjumlahkan2volumekubus(a, b) {
//   let volumeA = a * a * a;
//   let volumeB = b * b * b;
//   let total = volumeA + volumeB;
//   return total;
// }
// //default value => function jumlah (a, b = 1)

// console.log(menjumlahkan2volumekubus(3, 6));
// console.log(menjumlahkan2volumekubus(7, 9));

function menjumlahkan2volumekubus(a, b) {
  return a * a * a + b * b * b;
}

function sayHello(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
}

console.log(sayHello(`Yafi'`, "Irsyad"));

function reversed(myarray) {
  let arrayReversed = [];
  for (let index in myarray) {
    arrayReversed.unshift(myarray[index]);
  }
  return arrayReversed;
}

function ganjilGenap(arr) {
  let ganjil = [];
  let genap = [];
  for (let index in arr) {
    if (arr[index] % 2 != 0) {
      ganjil.push(arr[index]);
    } else {
      genap.push(arr[index]);
    }
  }
  return [ganjil, genap];
}

function myArr(arr) {
  return arr.length;
}

function plusMinus(arr) {
  let minus = [];
  let plus = [];
  for (let index in arr) {
    if (arr[index] < 0) {
      minus.push(arr[index]);
    } else {
      plus.push(arr[index]);
    }
  }
  return [minus, plus];
}

//Rest Parameter
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Manggo", 10, 20, 30, 40);

//Spread Syntax di Rest Parameter
const values = [10, 10, 10, 10, 10];
sum("Apel", ...values);

let arr = ["mozza", "arul", "fandy", "hanif"];

console.log(...arr);

//closure
function createAdder(value) {
  const owner = "Eko";

  function add(param) {
    console.info(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
// function addTwo(param){
//     console.info("Eko");
//     return 2 + param;
// }
console.info(addTwo(10));
console.info(addTwo(20));

const addTen = createAdder(10);
// function addTwo(param){
//     console.info("Eko");
//     return 10 + param;
// }
console.info(addTen(10));
console.info(addTen(20));

let nama = {
  firstName: "Yafi",
  lastName: "Irsyad",
  showName: function () {
    alert(`Nama: ${this.firstName} ${this.lastName}`);
  },
};

nama.showName();

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Smith");
const jane = new Person("Jane", "Doe");
const emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
console.table([john, jane, emily],['firstName']);
