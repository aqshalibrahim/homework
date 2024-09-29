let pendaftar = [];

function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);
    
    if (nama.length < 10) {
        alert("Nama minimal 10 karakter");
        return;
    }
    if (umur < 25) {
        alert("Umur minimal 25 tahun");
        return;
    }
    if (uangSangu < 100000 || uangSangu > 1000000) {
        alert("Uang sangu minimal 100 ribu dan maksimal 1 juta");
        return;
    }

    const data = { nama, umur, uangSangu };
    pendaftar.push(data);
    updateTable();
    clearForm();
}

function updateTable() {
    const tbody = document.getElementById('pendaftarList');
    tbody.innerHTML = '';
    let totalUangSangu = 0;
    let totalUmur = 0;

    pendaftar.forEach((p, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.nama}</td>
            <td>${p.umur}</td>
            <td>${p.uangSangu}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="hapusPendaftar(${index})">Hapus</button>
            </td>
        `;
        tbody.appendChild(row);

        totalUangSangu += p.uangSangu;
        totalUmur += p.umur;
    });

    document.getElementById('rataUangSangu').textContent = (totalUangSangu / pendaftar.length).toFixed(2);
    document.getElementById('rataUmur').textContent = (totalUmur / pendaftar.length).toFixed(2);
}

function hapusPendaftar(index) {
    pendaftar.splice(index, 1);
    updateTable();
}

function clearForm() {
    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uangSangu').value = '';
}