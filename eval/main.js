// let masuk = confirm("Anda yakin mau masuk?")
// if (masuk) {
//     let x = prompt("masukkan nama")
//     alert(`Welcome ${x}`)
// } else {
//     alert("bye-bye")
// }
// let masukk = prompt("masukkan angka");
// let d = masukk % 2 != 0? "ganjil": "genap";
// alert(`angkanya adalah ${d}`)   

// let datafilm = [
    
//     {
//         id: 1,
//         title: 'Tragedi Atap Jebol',
//         genre: ["Action", "Romance", "Comedy", "Horor"],
//         actor: ["Indra", "ipul", "David", "Moezha", "Arul"],
//         ratting: 9.05,
//         synopsis: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         type: 'Movie', // Movie || TV
//         producer: ["PIT Movic", "Indra Music Live"],
//         studio: 'PesantrenIT',
//         status: true // true => sudah rilis || false => belum rilis
//     },
// ]

// //a. Tambahkan data film kalian ke dalam array dataFilm di awal elemen array dengan format data seperti diatas.
// datafilm.unshift([

//     {
//         id: +new Date, //atau bisa menggunakan datafilm.length + 1
//         title: 'Pusing kepala arul',
//         genre: ["Action", "Romance", "Comedy", "Horor"],
//         actor: ["Hanif", "Faizal", "Faiz", "Fandy", "Arul"],
//         ratting: 9.50,
//         synopsis: 'arul yang berusaha menghilangkan pusing kepalannya',
//         type: 'Short Movie', // Movie || TV
//         producer: ["arul project", "arul corp"],
//         studio: 'Arul Studio',
//         status: true // true => sudah rilis || false => belum rilis
//     }
// ])

// //b. Hapus data film dari array dataFilm berdasarkan index.
// // delete datafilm[0]

// //c. Ubahlah properti status menjadi true atau false berdasarkan index dan buatlah menjadi lebih dinamis.
// let index = 1
// datafilm[index].status = !datafilm[index].status


// console.log(datafilm)

// console.log(datafilm[1].actor[3]);

// function angkahuruf(angka) {
//     switch (angka) {
//       case 1:
//         return "a";
//       case 2:
//         return "b";
//       case 3:
//         return "c";
//       case 4:
//         return "d";
//       case 5:
//         return "e";
//       case 6:
//         return "f";
//       case 7:
//         return "g";
//       case 8:
//         return "h";
//       case 9:
//         return "i";
//       case 10:
//         return "j";
//       default:
//         return 'tidak ada'
//     }
//   }

  function ang(angka){
    // let angkaToString = angka + ""
    // let stringToArray = angkaToString.split("");
    let stringToArray = angka.toString().split("");
    let result = ''
    for(let index in stringToArray){
        switch (stringToArray[index]) {
            case '1':
              result += "a";
              break;
            case '2':
              result += "b";
              break;
            case '3':
              result += "c";
              break;
            case '4':
              result += "d";
              break;
            case '5':
              result += "e";
              break;
            case '6':
              result += "f";
              break;
            case '7':
              result += "g";
              break;
            case '8':
              result += "h";
              break;
            case '9':
              result += "i";
              break;
            default:
              break;
          }
        
    }
    return result;
  }

  function mean (){
    let total = 0
    for(let i = 0; i<arguments.length; i++){
        total += arguments[i]
    }
    return total / arguments.length
}
