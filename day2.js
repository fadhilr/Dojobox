
var nilaiKepuasan = parseInt(prompt('Masukkan nilai kepuasan kamu : ', '0-100')) ;
let nilaiLulus = 75;
let nilaiMax = 100;

switch (true) {
    case nilaiKepuasan>=90:
        document.write('<br>'+"Grade A"+'<br>');
        break;
    case nilaiKepuasan>=80:
        document.write('<br>'+"Grade B"+'<br>');
        break;
    case nilaiKepuasan>=70:
        if (nilaiKepuasan>=nilaiLulus) {
            document.write('<br>'+'selamat anda luluss'+'<br>');
            if (nilaiKepuasan>nilaiMax) {
                document.write('<br>'+'error'+'<br>');
            }
        } else {
            document.write('<br>'+'selamat anda tidak luluss'+'<br>');
        }
        document.write('<br>'+"Grade C"+'<br>');
        break;
    case nilaiKepuasan>=60:
        document.write('<br>'+"Grade D"+'<br>');
        break;

    default:
        document.write('<br>'+"Grade E"+'<br>');
        break;
}