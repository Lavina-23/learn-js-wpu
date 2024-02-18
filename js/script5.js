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

// Spread Operator
// turns an iterable(like an array) into a single element
const mhs1 = ["Lavina", "Maudy", "Ayunda"];
console.log(...mhs1); // output: Lavina Maudy Ayunda
console.log(...mhs1[0]); // output: L a v i n a

// can be used to combine two array
const mhs2 = ["Lavina", "Maudy", "Ayunda"];
const dosen = ["Vivin", "Farida", "Baihaqi"];
const combi = [...mhs2, "Mayla", ...dosen];
console.log(combi); // array

// copying arrays
// const mhs3 = mhs2; // -> reference
const mhs3 = [...mhs2];
console.log(mhs3);

// insert list into an array
const liMhs = document.querySelectorAll("li");
// use for loop
const mhs4 = [];
for (let i = 0; i < liMhs.length; i++) {
  mhs4.push(liMhs[i].textContent);
}
console.log(mhs4);

// use .map()
// const mhs5 = liMhs.map((m) => m.textContent); // -> error because it's nodelist not an array
const mhs5 = [...liMhs].map((m) => m.textContent); // -> use spread operator
console.log(mhs5);

const judul = document.querySelector(".judul");
const huruf = [...judul.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
judul.innerHTML = huruf;
