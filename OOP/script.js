//1. object literal

// let character = {
//     name : 'diluc',
//     hp: 1500,
//     eat: function(number){
//         this.hp += number
//     }
// }

//2. Function Declaration
// let characterMethod = {
//     eat: function(number){
//         this.hp += number
//     },
//     hit: function(number){
//         this.hp -= number
//     }
// }

// function Character(name, hp){
//     let character = Object.create(characterMethod)

//     character.name = name
//     character.hp = hp
//     character.eat = characterMethod.eat
//     character.hit = characterMethod.hit
//     return character;
// }

// function Character(name, hp){
//     let character = Object.create(Character.prototype)

//     character.name = name
//     character.hp = hp

//     return character;
// }

// Character.prototype.eat = function(number){
//     this.hp += number
// }

// Character.prototype.hit = function(number){
//     this.hp -= number
// }

// //instance
// let diluc = Character('Diluc', 2000)
// let ling = Character('Ling', 2500)

//Constructor Function

// function Character(name, hp){
//     this.name = name
//     this.hp = hp
//     this.eat = function(number){
//         this.hp += number
//     }
//     this.hit = function(number){
//         this.hp -= number
//         if(this.hp <= 0){
//             this.hp = 0
//             return `${this.name} tereliminasi`
//         }
//         return `${this.name} terkena hit`
//     }
// }

// function Character(name, hp){
//     this.name = name
//     this.hp = hp
// }

// Character.prototype.eat = function(number){
//     this.hp += number
// }

// Character.prototype.hit = function(number){
//     this.hp -= number
//     if(this.hp <= 0){
//         this.hp = 0
//         return `${this.name} tereliminasi`
//     }
//     return `${this.name} terkena hit`
// }

// // //instance
// let chou = new Character('Chou', 3000)
// let hilda = new Character('Hilda', 4000)

// //4. class
// class Character {
//     constructor(name, hp){
//         this.name = name
//         this.hp = hp
//     }

//     eat(number){
//         this.hp += number
//     }

//     hit(number){
//         this.hp -= number
//             if(this.hp <= 0){
//                 this.hp = 0
//                 return `${this.name} tereliminasi`
//             }
//             return `${this.name} terkena hit`
//     }
// }

// //instance
// let chou = new Character('Chou', 3000)
// let hilda = new Character('Hilda', 4000)

// //pewarisan sifat
class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  hit(number) {
    this.hp -= number;
  }
}

//Inhheritance
class Hero extends Character {
  constructor(name, hp, weapon) {
    super(name, hp);
    this.weapon = weapon;
  }

  hit(number) {
    this.hp -= number;
    if (this.hp <= 0) {
      this.hp = 0;
      return `${this.name} tereliminasi`;
    }
    return `${this.name} terkena hit`;
  }
}

class Monster extends Character {
  constructor(name, hp, element) {
    super(name, hp);
    this.element = element;
  }

  hit(number) {
    this.hp -= number;
    if (this.hp <= 0) {
      this.hp = 0;
      return `${this.name} tereliminasi!!!`;
    }
    return `${this.name} terkena hit`;
  }
}

//Instance from class Hero
let spiderman = new Hero("Spiderman", 8000, "Spider");

//Instance from class Monster
let thanos = new Monster("Thanos", 10000, "Stone");

////arrow function
// let character = function() {
//   this.name = 'Irsyad'
//   this.say = () => `Hello ${this.name}`
// }

// let irsyad = new character();

//higher order function
//filter, map, reduce

//filter
// let myArray = [-1,4,5,2,-14,-4,7,10,11,-45]

// let newArray = myArray.filter(a => a >= 4)

//map
// let myArray = [-1,4,5,2,-14,-4,7,10,11,-45]

// let newArray = myArray.map(a => a * 2)

//reduce
// const arrayOfNumbers = [1, 2, 3, 4];

// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)

// setTimeout(() => {
//   alert('Apakah sudah mengaji hari ini?!!')
// }, 3000);

// setInterval(() => {
//   alert('Apakah sudah membaca alquran hari ini?!!')
// }, 5000);

// //chaining
// let myArray = [-1, 12, 5, -34, 8, 4, -5]

// //method chaining
// let newArray = myArray.filter(number => number >= 5)
// .map(number => number * 5)
// .reduce((accumulator, currentValue) => accumulator + currentValue)

// let books = [
//     {
//         id: 1,
//         title: 'Matematika Dasar',
//         currentValue: '2'
//     },
//     {
//         id: 1,
//         title: 'Javascript Dasar',
//         currentValue: '3'
//     },
//     {
//         id: 1,
//         title: 'Kalkulus Jilid 1',
//         currentValue: '4'
//     },
//     {
//         id: 1,
//         title: 'Javascript Lanjutan',
//         currentValue: '5'
//     },
//     {
//         id: 1,
//         title: 'Fisika Quantum',
//         currentValue: '6'
//     },
//     {
//         id: 1,
//         title: 'Javascript DOM',
//         currentValue: '7'
//     },
// ]

// let rakBukuJavascript = books.filter(book => book.title.toLowerCase().includes('Javascript'.toLowerCase()))
// let totalBukuJavascript = rakBukuJavascript.map(book => parseInt(book.currentValue)).reduce((acc, curr) => acc + curr)

// let todo =  [
//     {
//         id: 1,
//         nama: 'Irsyad'
        
//     },
//     {
//         id: 2,
//         nama: 'Faizal'
        
//     },
//     {
//         id: 3,
//         nama: 'Hanif'
        
//     },
// ]

// function deleteTodo (id) {
//     const result = todo.filter(n => n.id != id)
//     return result
// }

