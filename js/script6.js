// Callback

// Sync Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

function tampilkanPesan(callback) {
  const nama = prompt("Masukkan nama: ");
  callback(nama);
}

tampilkanPesan((nama) => {
  alert(`Halo, ${nama}`);
});

// Async Callback
const mhs = [
  {
    nama: "Lavina",
    nrp: "07482419",
    email: "lavina@gmail.com",
    jurusan: "SIB",
    idDosenWali: 1,
  },
  {
    nama: "Yono",
    nrp: "074121419",
    email: "yono@gmail.com",
    jurusan: "SIB",
    idDosenWali: 2,
  },
  {
    nama: "Repret",
    nrp: "07481239",
    email: "repa@gmail.com",
    jurusan: "SIB",
    idDosenWali: 3,
  },
];

console.log("Mulai");
mhs.forEach((m) => {
  for (let i = 0; i < 1000000; i++) {
    let date = new Date();
  }
  console.log(m.nama);
});
console.log("Selesai");

// Async Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

getDataMahasiswa(
  "../user.json",
  (result) => {
    console.log(result);
  },
  error
);
