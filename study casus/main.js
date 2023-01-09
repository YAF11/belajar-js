//starter
let question = true
while (question) {
    
    alert("Tebak angka 1-10. Dengan kesempatan 3 kali")
    
    let player = Number(prompt("Masukkan angka"))
    
    let comp = Math.round(Math.random()*10)
    console.log(comp);

    //rule
    let hp = 2

while (hp > 0 && player != comp) {
    
    if(player > comp){
        alert(`angka yang kamu masukkan terlalu tinggi kesempatanmu sisa ${hp} lagi`)
        player = Number(prompt("Masukkan angka"))
    } else{
        alert(`angka yang kamu masukkan terlalu rendah kesempatanmu sisa ${hp} lagi`)
        player = Number(prompt("Masukkan angka"))
    }
    hp--
}

if (player == comp) {
    alert("tebakanmu benar")
   question = confirm("apakah kamu mau main lagi?")
}

if (player != comp && hp == 0) {
   alert(`kesempatan kamu telah habis, angka yang kamu cari adalah ${comp}`)
   question = confirm("apakah kamu mau main lagi?") 
}

}



