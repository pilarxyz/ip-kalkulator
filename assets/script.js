const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const mhsMatkul = document.querySelector("#mhs-matkul").value;
  const mhsSks = document.querySelector("#mhs-sks").value;
  const mhsNilai = document.querySelector("#mhs-nilai");

  if (mhsNilai.value && mhsSks && mhsMatkul) {
    const Mahasiswa = {
      matkul: mhsMatkul,
      sks: mhsSks,
      nilai: konversiNilai(parseInt(mhsNilai.value)),
    };

    addRow(Mahasiswa.matkul, Mahasiswa.sks, Mahasiswa.nilai);
  } else {
    alert("Form Belum Lengkap");
  }

  setIP();
});

function konversiNilaiHuruf(nilaiAngka) {
  if (nilaiAngka.value == Number(document.querySelector("#mhs-nilai").value)) {
    let nilaiHuruf = ["E", "D", "C", "B", "A"];
    document.querySelector("#mhs-nilai-huruf").value =
      nilaiHuruf[nilaiAngka.value];
  } else {
    document.querySelector("#mhs-nilai-huruf").value = "";
  }
}

const setIP = () => {
  const rows = document.querySelectorAll(".table-body tr");
  let totalSks = 0;
  let totalNilai = 0;
  rows.forEach((row) => {
    let sks = row.querySelector(".sks").innerHTML;
    let nilai = row.querySelector(".nilai").innerHTML;
    totalSks += Number(sks);
    totalNilai += Number(konversiNilaiHurufKeAngka(nilai)) * Number(sks);
  });
  let gpa = totalNilai / totalSks;
  document.querySelector("#ipk").innerText = "IPK: " + gpa.toFixed(2);
};

const konversiNilaiHurufKeAngka = (nilaiAngka) => {
  if (nilaiAngka === "A") {
    return 4;
  } else if (nilaiAngka === "B") {
    return 3;
  } else if (nilaiAngka === "C") {
    return 2;
  } else if (nilaiAngka === "D") {
    return 1;
  } else {
    return 0;
  }
};

const konversiNilai = (mhsNilai) => {
  let nilaiKonversi;
  if (mhsNilai === 4) {
    return (nilaiKonversi = "A");
  } else if (mhsNilai === 3) {
    return (nilaiKonversi = "B");
  } else if (mhsNilai === 2) {
    return (nilaiKonversi = "C");
  } else if (mhsNilai === 1) {
    return (nilaiKonversi = "D");
  } else if (mhsNilai === 0) {
    return (nilaiKonversi = "E");
  }
};

const addRow = (matkul, sks, nilai) => {
  const tableBody = document.querySelector(".table-body");
  const el = `
    <tr>
    <td>${matkul}</td>
    <td class="sks">${sks}</td>
    <td class="nilai">${nilai}</td>
    </tr>
    `;
  tableBody.innerHTML += el;
};
