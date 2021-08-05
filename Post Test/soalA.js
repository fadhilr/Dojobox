var rakBuku = [1,2,3,4,5];
var judulBuku = prompt('Tambahkan buku ke rak dengan judul = ');


tambahBuku(judulBuku)

var pinjam = parseInt(prompt('Pilih rak buku yang ingin dipinjam = ')) ;
pinjamBuku(pinjam)

var bukuKembali = prompt('Kembalikan buku ke rak dengan judul = ')
var rakKembali = parseInt(prompt('Pilih rak buku yang ingin dikembalikan = ')) ;
kembalikanBuku(rakKembali,bukuKembali)

document.write(rakBuku.join('<br>'))
function tambahBuku(judul){
    for (let index = 0; index < rakBuku.length; index++) {
        rakBuku[index] = judul;
    }
}
function pinjamBuku(indexRak){
    rakBuku[indexRak] = undefined;
}

function kembalikanBuku(indexRak, judul){
    rakBuku[indexRak] = judul;
}