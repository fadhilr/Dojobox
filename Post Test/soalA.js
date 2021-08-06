var rakBuku = new Array(5);
var judulBuku = prompt('Masukkan judul buku awalan = ');
tambahBuku(judulBuku)
cetak()

var pinjam = parseInt(prompt('Pilih rak buku yang ingin dipinjam = ')) ;
pinjamBuku(pinjam)
cetak()

var bukuKembali = prompt('Kembalikan buku ke rak dengan judul = ')
var rakKembali = parseInt(prompt('Pilih rak buku yang ingin dikembalikan = ')) ;
kembalikanBuku(rakKembali,bukuKembali)
cetak()

function tambahBuku(judul){
    for (let index = 0; index < rakBuku.length; index++) {
        rakBuku[index] = judul+' '+(index+1);
    }
}
function pinjamBuku(indexRak){
    rakBuku[indexRak-1] = undefined;
}

function kembalikanBuku(indexRak, judul){
    rakBuku[indexRak-1] = judul;
}

function cetak(){
    document.write(rakBuku.join('<br>'))
    document.write('<br>')
    document.write('<br>')
}