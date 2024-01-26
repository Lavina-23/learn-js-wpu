// for.. of
// array
const mhs = ["Lavina", "Yonanda", "Kayla"];

// w for
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// w forEach
mhs.forEach((m) => console.log(m));

// if use forEach we can access the index
mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// w for.. of
// can't access the index
for (const m of mhs) {
  console.log(m);
}

// if want to access index w for.. of use entries()
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// String
const nama = "Lavina";
for (const n of nama) {
  console.log(n);
}

// Nodelist
const liNama = document.querySelectorAll(".nama");

// loop w forEach
liNama.forEach((n) => console.log(n.innerHTML));

// loop w for.. of
for (const n of liNama) {
  console.log(n.innerHTML);
}

// Arguments
// for arguments we can't use reduce() and forEach
function jumlahkanAngka() {
  // we should use for.. of
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for.. in -> use it for loops object properties
const prod = {
  nmProd: "Beras",
  harga: 20000,
  merk: "Rojo Lele",
};

for (const p in prod) {
  //   console.log(p); // output: properties
  console.log(prod[p]); // output: propertie values
}
