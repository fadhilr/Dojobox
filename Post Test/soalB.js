var barangElektronik = ['hp', 'cas', 'iphone', 'kabel', 'speaker'];
var namaBarang = prompt('Input nama barang = ');
var jumlahBarang = parseInt(prompt('Input jumlah barang = '));
var hargaBarang = parseInt(prompt('Input harga barang = '));
var discount = parseInt(prompt('Input discount barang = '));
var hasilDiskon = hitungDiskon(discount);
var total = totalHarga(hargaBarang, jumlahBarang, hasilDiskon);

for (let index = 0; index < barangElektronik.length; index++) {
    var ada = false;
    if (namaBarang == barangElektronik[index]) {
        cetak();
        ada = true
        break;
    }
    if (ada == false) {
        document.write('Maaf barang yang anda cari tidak tersedia')
        break;
    }
}



function cetak() {
    document.write('Nama Barang : ' + namaBarang + '<br>')
    document.write('Harga : Rp. ' + hargaBarang + '<br>')
    document.write('Jumlah : ' + jumlahBarang + '<br>')
    document.write('Discount ' + discount + '%: Rp. ' + hasilDiskon + '<br>')
    document.write('Total : Rp. ' + total + '<br>')
}


function totalHarga(harga, jumlah, diskon) {
    var hasil;
    hasil = (harga * jumlah) - diskon;
    return hasil;
}

function hitungDiskon(diskon) {
    var hasil;
    hasil = hargaBarang * (diskon / 100);
    return hasil;
}