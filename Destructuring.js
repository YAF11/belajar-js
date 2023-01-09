// let angka = [1,2,3]
// const [a,b,c] = angka
// console.log(a);

// let santri = {
//     nama: 'Irsyad',
//     umur: 20
// }
// const {nama,umur} = santri
// console.log(umur);

// //swap item
// let x = 1
// let y = 2
// console.log(x);
// console.log(y);
// [x,y]=[y,x]
// console.log(x);
// console.log(y);

//destructuring return value
// function testing(){
//     return [1,2]
// }
// let [a,b] = testing()
// console.log(a);

// restParameter
// function tes(){
//     return[1,2,3,4,5,6,7,8]
// }
// let [a,b,c,...values] = tes()
// console.log(values);

// //destructuring object
// let santri = {
//     Name: 'Arul',
//     Age: '17',
//     Wife: ['Mumtaz', 'Soraya', 'Kyra']
// }

// let {Name:n, Age:a, Wife:w,email:e = 'tidak ada'} = santri

// console.log(e);

// let santri = {
//     id: 1,
//     nama: 'Faiz',
//     umur: 45
// }

// function perkenalan ({nama, umur, id}) {
//     return `nama saya ${nama} umur saya ${umur} dan id = ${id}`
// }

// console.log(perkenalan(santri));

// ({name, age} = {name: 'Arul', age: 55})
// console.log(age);

// function mtk(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// let [tambah, kurang, kali, bagi] = mtk(5,5);

// console.log(kali);

// function kalkulasi(x, y) {
//   return {
//     tambah: x + y,
//     kurang: x - y,
//     kali: x * y,
//     bagi: x / y,
//   };
// }

// let { kali, bagi, tambah, kurang } = kalkulasi(5, 5);
// console.log(tambah);

let santri = {
  name: "Arul",
  age: "17",
  divisi: ['Mobile Dev', 'BackEnd Dev'],
  nilai: {
    tugas: 75,
    evaluasi: 30,
    praktek: 50,
  },
};

function perkenalan({
  name,
  age,
  divisi: [mbl, bed],
  nilai: { tugas, evaluasi, praktek },
}) {
  return `nama saya ${name} umur saya ${age} divisi saya adalah ${mbl} dan nilai evaluasi ${evaluasi}`;
}

console.log(perkenalan(santri));
