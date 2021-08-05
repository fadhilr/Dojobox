
// var nilaiKepuasan = parseInt(prompt('Masukkan nilai kepuasan kamu : ', '0-100')) ;
// let nilaiLulus = 75;
// let nilaiMax = 100;

// switch (true) {
//     case nilaiKepuasan>=90:
//         document.write('<br>'+"Grade A"+'<br>');
//         break;
//     case nilaiKepuasan>=80:
//         document.write('<br>'+"Grade B"+'<br>');
//         break;
//     case nilaiKepuasan>=70:
//         if (nilaiKepuasan>=nilaiLulus) {
//             document.write('<br>'+'selamat anda luluss'+'<br>');
//             if (nilaiKepuasan>nilaiMax) {
//                 document.write('<br>'+'error'+'<br>');
//             }
//         } else {
//             document.write('<br>'+'selamat anda tidak luluss'+'<br>');
//         }
//         document.write('<br>'+"Grade C"+'<br>');
//         break;
//     case nilaiKepuasan>=60:
//         document.write('<br>'+"Grade D"+'<br>');
//         break;

//     default:
//         document.write('<br>'+"Grade E"+'<br>');
//         break;
// }

// const phi = 3.14;
// const percepatanGravity = 10;
// var angka=20;

// if (angka % 2 === 0) {
//     document.write('<br>'+ angka +' adalah bilangan genap'+'<br>');
// } else if (angka % 2 === 1) {
//     document.write('<br>'+ angka+' adalah bilangan ganjil'+'<br>');
// }else{
//     document.write()
// }

// var ulang = 1;

// while (ulang<=5) {
//     document.write('<br>'+'Member TA vista '+ulang+'<br>');
//     ulang+=1;
// }
// for (ulang = 6; ulang <= 10; ulang++) {
//     document.write('<br>'+'Member TA Intan '+ulang+'<br>')
    
// }

// var buah = ['apel', 'cimpedek','duku','salak', 'semangka'];
// document.write(typeof(buah[2])+'<br>');
// document.write(buah+'<br>');
// document.write(buah.length+'<br>');

// var iniFunction = function(){

// }

// var myArr = ['teks',1234,true,iniFunction,[2,3,4]];
// document.write(myArr[3]);
// document.write('<br>');
// document.write(myArr[4]);

// // for (let index = 0; index < angka.length; index++) {
// //     document.write('angka '+angka[index] + '<br>');
    
// // }

// var myArr2= [];
// myArr2[0] = 1;
// myArr2[1] = 2;
// myArr2[3] = 3;
// document.write('<br>');
// document.write(myArr2)

var buah = ['apel', 'cimpedek','duku','salak', 'semangka'];
buah.push('duren');
buah.push('mangga');
buah.pop()
buah.unshift('jambu');
buah.shift();
buah.splice(2,1,'melon','anggur');
document.write(buah.join('<br>'));

var newBuah = buah.slice(1,3);
document.write('<br>');
document.write('<br>');
document.write(newBuah.join('<br>'));
document.write('<br>');
document.write('<br>');
buah.forEach(function(e,i){
    document.write((i+1) +'='+e+ '<br>')
})
var buahBaru = buah.map(function(e,i){
    return e + ' Enak dimakan'
})

document.write(buahBaru.join('<br>'));

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
