document.write("HELLO WORD")
console.log("HELLO WORD")

var a = 20
var b = 20

console.log(a*b)

var nilai = 85
if (nilai >= 85) {
    alert("A")
    console.log("A");
}
else if (nilai >= 75){
    alert("B")
    console.log("B");
} 
else {
    alert("C")
    console.log("C");
}

    var x   = 5000;
var y   = 5000;
var z   = 50000;

if( x >= z || y >= z ){
 alert("uang anda cukup");
} else{
 alert("uang anda tidak cukup");
}

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(let number = 1; number <= 20; number++){
    if (number % 2 != 0 && number % 3 == 0) {
        console.log(number + " - I Love Coding");
    }
    else if(number % 2 != 0){
        console.log(number + " - Santai");
    }
    else {
        console.log(number + " - Berkualitas");
    }
} 
 document.write("<br>")
// logic 1, soal 1
document.write("logic 1, soal 1")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 2
document.write("logic 1, soal 2")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x+y == 10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 3
document.write("logic 1, soal 3")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y || x+y == 10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 4
document.write("logic 1, soal 4")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==5 || y==5 || x==y || x+y == 10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 5
document.write("logic 1, soal 5")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x<=y) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 6
document.write("logic 1, soal 6")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x+y >= 10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 7
document.write("logic 1, soal 7")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (y<=x && x+y<=10 || y>=x && x+y>=10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

//logic 1, soal 8
document.write("logic 1, soal 8")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x<=y && x+y<=10 || x>=y && x+y>=10) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x>=y) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}


document.write("<br>")

// logic 2, soal 1
document.write("logic 2, soal 1")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y) {
            document.write(x*2-1)
        }
         else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 2
document.write("logic 2, soal 2")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x+y == 10) {
            document.write(x*2-2)
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 3
document.write("logic 2, soal 3")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y) {
            document.write(x*2-1)
        }else if(x+y == 10){
            document.write(x*2-2)
        }
         else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 4
document.write("logic 2, soal 4")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y || x==5) {
            document.write(" ", y*2-1 ," ")
        }else if(x+y == 10 || y==5){
            document.write(" ", x*2-2 ," ")
        }
         else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}
document.write("<br>")

// logic 2, soal 5
document.write("logic 2, soal 5")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x<=y) {
            document.write(" ", x*2-1 ," ")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 6
document.write("logic 2, soal 6")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x+y >= 10) {
            document.write(" ", -y*2+18 ," ")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 7
document.write("logic 2, soal 7")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y) {
            document.write(x*2-1)
        }else if(x+y == 10){
            document.write(x*2-2)
        }else if(y<=x && x+y<=10){
            document.write("A")
        }else if(y>=x && x+y>=10){
            document.write("B")
        }else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

// logic 2, soal 8
document.write("logic 2, soal 8")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==y) {
            document.write(x*2-1)
        }else if(x+y == 10){ 
            document.write(x*2-2)
        }else if(x<=y && x+y<=10){
            document.write("A")
        }else if(x>=y && x+y>=10){
            document.write("B")
        }else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}
