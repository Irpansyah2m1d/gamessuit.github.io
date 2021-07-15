// Pembukaan
alert('Selamat datang Di Game Suit Jawa')
var tanya = true;
while (tanya) {
	// Tangkap Inputan User
	var user = prompt('Masukan Pilihan Anda ' + '\n' + 'gunting , batu, kertas');

	// Tangkap Inputan Komputer

	var komp = Math.random();


	if (komp < 0.34) {
		komp = 'gunting';
	} else if(komp >= 0.34 && komp < 0.67) {
		komp = 'batu';
	} else {
		komp = 'kertas';
	}

	console.log(komp);
	// Buat Aturan

	var hasil = '';

	if (user == komp) {
		hasil = 'HASILNYA SERI';
	}else if ( user == 'gunting') {
		hasil = (komp == 'batu') ? "KAMU KALAH" : "KAMU MENANG";
	}else if (user == 'batu') {
		hasil = (komp == 'kertas') ? "KAMU KALAH" : "KAMU MENANG";
	} else if (user == 'kertas') {
		hasil = (komp == 'gunting') ? "KAMU KALAH" : "KAMU MENANG";
	} else {
		hasil = 'Kamu Memasukan Inputan Yang Salah';
	}




	// Hasil
	alert('Setelah dipertimbangkan oleh dewan juri' + '\n' + 'Komputer memilih ' + komp + ' dan Kamu memilih ' + user + ' maka ' + hasil);
	// Tanya Mau Lagi dak
	tanya = confirm('Mau Main Lagi Nggak');

}


// Penutup
alert ('Terima Kasih Jangan Lupa bayar dikasir');


