
// Soal 1
console.log("---SOAL 1---")
console.log("LOOPING PERTAMA")

var nilai = 2;
while ( nilai <= 20) {
    console.log(nilai + ' -  I Love coding  ');
    nilai+=2;
}

console.log("LOOPING KEDUA")

var nilai = 20;
while ( nilai >= 2) {
    console.log(nilai + ' -  I will become a frontend developer  ');
    nilai-=2;
}
console.log()


// Soal 2
console.log("---SOAL 2---")
for(var nilai = 1; nilai <= 20; nilai++){
    
    if (nilai % 3 === 0 && nilai % 2 ===1) {
        console.log(nilai + ' I Love Coding');
    } else if ( nilai % 2 === 1 ) {
        console.log(nilai + ' Santai')
    }    else {
        console.log(nilai + ' Berkualitas');
    }
}
console.log()

// Soal 3
console.log("---SOAL 3---")
for(var i = 1; i <= 7; i++) {
    var x = "";
    for(var j = 1; j <= i; j++) {
     x = x + '#';
    }
    console.log(x);
  }
  console.log()
  

// Soal 4
console.log("---SOAL 4---")

var kalimat= "saya sangat senang belajar javascript"

kalimat.split(' ');

console.log(kalimat)
console.log()



// Soal 5
console.log("---SOAL 5---")

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

var sortDaftarBuah = daftarBuah.sort();
    for(var i = 0; i<= 4; i++){
        console.log(sortDaftarBuah[i]);
    }
console.log()