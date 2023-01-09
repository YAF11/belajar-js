// let fruits = fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(response => response.json())
// .then(response => console.log(response))

//promise Object  merepresentasikan keberhasilan / kegagalan dari sebuah event asynchronus yang terjadi masa yang akan datang
//Janji(ditepati / ingkar)
//callback(resolve / reject)
// states (pending, fullfiled, rejected)
//aksi (then / catch / finaly)

// contoh 1

// let ditepati = false;
// const promise1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("200 ok, janji telah ditepati");
//   } else {
//     reject("Error 500, janji diingkari");
//   }
// });

// promise1
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

// // contoh 2
let promise2 = new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
            id: 1,
            name: "Irsyad",
            jurusan: "Programmer",
            divisi: "Mobile Dev"
        }
      ])  
    },5000);
})

// console.log('loading. . .');
// promise2
// .then(response => console.log(response))
// .finally(() => console.log('data selesai, loading berhenti'))

let promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: 'Jujun',
                jurusan: 'Programmer',
                divisi: 'Mobile Dev'
            }
        ])
    }, 3000);
})

Promise.all([ promise2, promise3]).then(res => {
    const [ santri, mentor ] = res
    console.log(santri);
    console.log(mentor);
})


