const penumpangList = [];

// Fungsi untuk menambah penumpang
function tambahPenumpang() {
    const input = document.getElementById('namaPenumpang');
    const nama = input.value.trim();

    if (nama) {
        penumpangList.push(nama);
        input.value = '';
        perbaruiDaftar();
    } else {
        alert('Nama penumpang tidak boleh kosong!');
    }
}

// Fungsi untuk menghapus penumpang berdasarkan index
function hapusPenumpang(index) {
    penumpangList.splice(index, 1); // Hapus penumpang dari array
    perbaruiDaftar(); // Perbarui tampilan
}

// Fungsi untuk memperbarui daftar penumpang di layar
function perbaruiDaftar() {
    const daftarDiv = document.getElementById('penumpang-list');
    daftarDiv.innerHTML = '';

    if (penumpangList.length === 0) {
        const kosong = document.createElement('p');
        kosong.classList.add('empty');
        kosong.textContent = 'Isi angkot masih kosong';
        daftarDiv.appendChild(kosong);
    } else {
        const ul = document.createElement('ul');
        penumpangList.forEach((penumpang, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${penumpang}`;

            // Tambahkan tombol hapus untuk setiap penumpang
            const btnKeluar = document.createElement('button');
            btnKeluar.textContent = 'Keluar';
            btnKeluar.classList.add('btn-keluar');
            btnKeluar.onclick = () => hapusPenumpang(index); // Panggil fungsi hapusPenumpang
            li.appendChild(btnKeluar);

            ul.appendChild(li);
        });
        daftarDiv.appendChild(ul);
    }
}