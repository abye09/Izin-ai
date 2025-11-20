function generateSurat(){
    let jenis = document.getElementById("jenisSurat").value;
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let tanggal = document.getElementById("tanggal").value;
    let alasan = document.getElementById("alasan").value;

    let template = "";

    if(jenis === "sakit"){
        template = `Kediri, ${tanggal}

Yth. Bapak/Ibu Guru Wali Kelas ${kelas}
Di Tempat

Dengan hormat,
Saya yang bertanda tangan di bawah ini:
Nama: ${nama}
Kelas: ${kelas}

Memberitahukan bahwa saya tidak dapat masuk sekolah karena ${alasan}.

Hormat saya,
${nama}`;
    }

    else if(jenis === "tidak_masuk"){
        template = `Kediri, ${tanggal}

Yth. Bapak/Ibu Wali Kelas ${kelas}
Di Tempat

Dengan hormat,
Saya ${nama}, kelas ${kelas}, memohon izin tidak masuk sekolah karena ${alasan}.

Hormat saya,
${nama}`;
    }

    else if(jenis === "pulang"){
        template = `Kediri, ${tanggal}

Yth. Bapak/Ibu Wali Kelas ${kelas}
Di Tempat

Dengan hormat,
Saya ${nama}, kelas ${kelas}, memohon izin pulang sebelum waktunya karena ${alasan}.

Hormat saya,
${nama}`;
    }

    else if(jenis === "kegiatan"){
        template = `Kediri, ${tanggal}

Yth. Bapak/Ibu Guru
Di Tempat

Dengan hormat,
Saya ${nama}, kelas ${kelas}, memohon izin tidak mengikuti pelajaran karena ${alasan}.

Hormat saya,
${nama}`;
    }

    document.getElementById("hasil").style.display = "block";
    document.getElementById("hasil").innerText = template;
}
