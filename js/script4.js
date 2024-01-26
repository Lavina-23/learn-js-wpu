// Template Literals
// HTML fragments
const mhs = {
  nama: "Lavina",
  umur: 19,
  nrp: "0987654321",
  email: "lavina@gmail.com",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

// document.body.innerHTML = el;

// Looping
const mhs1 = [
  {
    nama: "Lavina",
    email: "lavina@gmail.com",
  },
  {
    nama: "Aden",
    email: "aden@gmail.com",
  },
  {
    nama: "Anais",
    email: "anais@gmail.com",
  },
];

const el1 = `<div class="mhs">
  ${mhs1
    .map(
      (m) =>
        `<ul>
      <li>${m.nama}</li>
      <li>${m.email}</li>
    </ul>`
    )
    .join("")}
</div>`;

// document.body.innerHTML = el1;

// Conditionals w ternary
const lagu = [
  {
    judul: "I Don't Love You",
    penyanyi: "My Chemical Romance",
  },
  {
    judul: "Glue Song",
    penyanyi: "beabadoobee",
    feat: "Clairo",
  },
];

const el2 = `<div>
${lagu
  .map(
    (l) =>
      `<ul>
    <li>${l.judul}</li>
    <li>
      ${l.penyanyi} ${l.feat ? `(feat. ${l.feat})` : ""}
    </li>
  </ul>`
  )
  .join("")}
</div>`;

// document.body.innerHTML = el2;

// Nested
const mhs2 = {
  nama: "Lavina",
  semester: 1,
  matkul: [
    "Dasar Pemrograman",
    "Pengantar Akuntansi",
    "Matematika",
    "Critical Thinking",
  ],
};

function cetakMatkul(matkul) {
  return `
    <ol>
      ${matkul.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
  `;
}

const el3 = `<div>
  <h2>${mhs2.nama}</h2>
  <span class="semester">Semester : ${mhs2.semester}</span>
  <h4>Mata Kuliah : </h4>
  ${cetakMatkul(mhs2.matkul)}
</div>`;

document.body.innerHTML = el3;

// Tagged Templates
const nama = "Lavina";
const umur = 19;

function coba(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += `${str}${values[i] || ""}`;
  });
  // return result;

  // w reduce
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] || ""}`,
    ""
  );
}

const str = coba`Halo nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);

// hightlight
const nama1 = "Lavina";
const umur1 = 19;
const email = "lavina@gmail.com";

function hightlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str1 = hightlight`Halo nama saya ${nama1}, saya ${umur} tahun, dan email saya adalah ${email}`;
document.body.innerHTML = str1;

// Destructuring Variable / Assignment
// destructuring array

const perkenalan = ["Halo", "nama", "saya", "Lavina"];
const [salam, satu, dua, nama2] = perkenalan;
const [salam1, , , nama3] = perkenalan; // skipping items

console.log(nama2);

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);

// return value from function
function coba() {
  return [1, 2];
}

const [one, two] = coba();
console.log(two);

// rest parameter -> suitable if u don't know how many elements are in the arr
const [hana, ...num] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(hana);
console.log(num);

// destructuring object
const mhs3 = {
  namaku: "Lavina",
  umurku: 19,
};

const { nama4, umur2 } = mhs3;
console.log(nama4); // -> undifined, because the name of properties is different with the variable in the object

// right way ⬇️
// const { namaku, umurku } = mhs3;
// console.log(namaku);

// assign properties to new variable
const { namaku: n, umurku: u } = mhs3;
console.log(n);

// assign the object w/o declare it
({ namaku1, umurku1 } = { namaku1: "Lavina", umurku1: 19 });
console.log(umurku1);

// gives default value
const warga = {
  name: "Aden",
  age: 17,
  // telp: "0987654321"
};

const { name, age, telp = "1234567890" } = warga;
console.log(telp);

// w new variable
const { name: nm, age: ag, telp: tp = "1234567890" } = warga;
console.log(tp);

// w rest param
const { name: name1, ...anotherValues } = warga;
console.log(name1);
console.log(anotherValues);

// take fields from object after it sent as function parameters
const pejabad = {
  id: 123,
  jeneng: "Maria",
  omor: 39,
  telpon: 6789054321,
};

// w/o destructuring
function getIdPejabad(pejabad) {
  return pejabad.id;
}
console.log(getIdPejabad(pejabad));

// w destructuring
function getValuesPejabad({ id }) {
  return id;
}
console.log(getValuesPejabad(pejabad));

// Destructuring Function
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// w/o destructuring
const jumlah = penjumlahanPerkalian(2, 3)[0];
console.log(jumlah);
const kali = penjumlahanPerkalian(2, 3)[1];
console.log(kali);

// w destructuring
const [jumlah1, kali1] = penjumlahanPerkalian(2, 3);
console.log(jumlah1);
console.log(kali1);

// the order of properties must be consistent
const [add, substract, multiply, divide = 0] = kalkulasi(2, 3); // can be given a default value
console.log(substract);
console.log(divide);

// if want to assign properties randomly :
function kalkulasi1(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    perkalian: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kurang, perkalian } = kalkulasi1(2, 3);
console.log(perkalian);

// Destructuring function arguments
const produk = {
  nmProd: "Beras",
  harga: 20000,
  stok: 15,
  ukuran: {
    sedang: "2Kg",
    besar: "5Kg",
  },
};

// w/o destructuring
// use param
function cetakProduk(nmProd, harga) {
  return `Kami punya produk ${nmProd}, harganya ${harga} ribu rupiah.`;
}
console.log(cetakProduk(produk.nmProd, produk.harga));

// use object
function cetakProduk1(produk) {
  return `Kami punya produk ${produk.nmProd}, harganya ${produk.harga} ribu rupiah.`;
}
console.log(cetakProduk1(produk));

// w destructuring
function cetakProduk2({ nmProd, harga, ukuran: { sedang, besar } }) {
  return `Kami punya produk ${nmProd}, harganya ${harga} ribu rupiah. Ada 2 macam berat beras yaitu, ${sedang} dan ${besar}`;
}
console.log(cetakProduk2(produk));
