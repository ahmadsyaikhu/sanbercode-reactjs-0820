
// Soal 1
console.log("---SOAL 1---")

function halo(){
    return "Halo Sanbers!"  ;
}
 console.log(halo()) // "Halo Sanbers!"
 
// Soal 2
console.log("---SOAL 2---")

function kalikan(num1, num2){
    return num1 * num2 ;
}

var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// Soal 3
console.log("---SOAL 3---")

var introduce = function(name,age){
    return 'Nama saya '+ name + ' umur saya '+ age +' tahun'
    + ' alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby ;
    
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 

  

// Soal 4
console.log("---SOAL 4---")

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var arrayDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jeniskelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(arrayDaftarPeserta);


// Soal 5
console.log("---SOAL 5---")

var dataBuah = [
    {nama: 'Strawberry',warna: 'merah',adaBijinya: 'tidak',harga: 9000 },
    {nama: 'Jeruk',warna: 'oranye',adaBijinya: 'ada',harga: 8000 },
    {nama: 'Semangka',warna: 'hijau & merah',adaBijinya: 'ada',harga: 10000 },
    {nama: 'Pisang',warna: 'kuning',adaBijinya: 'tidak',harga: 5000 }
];
console.log(dataBuah[0]);

// Soal 6
console.log("---SOAL 6---")
// buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun
var dataFilm = []

function film (nama, durasi, genre, tahun){
    dataFilm.push({nama: 'Frozen',durasi: '1jam 40menit',genre:'Animation',tahun:2013});
}
film();
console.log(dataFilm)


