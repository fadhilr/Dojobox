// var inputSisiA = parseInt(prompt('Masukkan sisi kubus A ', '0-10'));
// var inputSisiB = parseInt(prompt('Masukkan sisi kubus B ', '0-10'));
// var volumeKubusA = hitungVolumeKubus(inputSisiA);
// var volumeKubusB = hitungVolumeKubus(inputSisiB);
// var jumlahKubus = penjumlahanKubus(volumeKubusA, volumeKubusB)
// document.write('Sisi kubus A = '+inputSisiA+'<br>')
// document.write('Sisi kubus B = '+inputSisiB+'<br>')
// document.write('Volume kubus A = '+volumeKubusA+'<br>')
// document.write('Volume kubus B = '+volumeKubusB+'<br>')
// document.write('Jumlah kedua volume kubus = '+jumlahKubus+'<br>')

// function hitungVolumeKubus(sisiA){
//     var jumlah =1;
//     for (let index = 0; index < 3; index++) {
//         jumlah *= sisiA;
//     }
//     return jumlah;
// }

// function penjumlahanKubus(volumeA, volumeB){
//     var jumlah = 0;
//     jumlah = volumeA+volumeB;
//     return jumlah;
// }


// var jmlVolumeKubus = function(volumeKubusA,volumeKubusB){

// }

function tambah(a, b) {
    return a + b;
}

document.write(tambah(5, 3) + '<br>');
// document.write(tambah(4,4) + '<br>');
// document.write(tambah(10,4) + '<br>');
// document.write(tambah(4,5,9) + '<br>');

var penjumlahan = function (angka1, angka2) {
    var hasil
    hasil = angka1 + angka2
    return hasil
}
document.write(penjumlahan(5, 3) + '<br>');

function cetak(bil1, bil2) {
    document.write('Bilangan pertama : ' + bil1 + '<br>')
    document.write('Bilangan kedua : ' + bil2 + '<br>')
}
cetak('200.000', '500.000')

var akademia = {
    nama: 'fadhil',
    NIK: '12312312',
    email: 'fadilrizqullah97@gmail.com',

    getName : function(){
        document.write('Nama saya adalah = '+ this.nama)
    },
    getEmail : function(){
        document.write('Email saya adalah = '+ this.email)
    }
};

//constructor
function akademi(){
    this.nama = nama;
    this.email = email;
    this.nik = nik;
}

var akademia = new akademia('fadhil','123121','fadilri@gmail.com');

//object create