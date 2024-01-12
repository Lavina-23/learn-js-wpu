// CLOSURE
function init() {
  //   let nama = "Lavina";

  // function tampilNama() {
  //     console.log(nama) -> access 'nama' variable from outer function
  // }

  // anonymous function
  return function (nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama("Lavina");

// factory function
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan !`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Lavina");
selamatMalam("Lavina");

// w/o closure
let counter = 0;
let add1 = function () {
  return ++counter;
};

counter = 10; // will change the counter

console.log(add1());
console.log(add1());
console.log(add1());

// with closure
let add = function () {
  let counter = 0;
  // use inner function
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());

// with IIFE (Immediately Invoked Function Expression)
let add2 = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add2());
console.log(add2());
console.log(add2());

// ARROW FUNCTION
// from this
const tampilNama = function (nama) {
  return `Halo, ${nama}`;
};
console.log(tampilNama("Lavina"));

// to this
const tampilNama2 = (nama) => {
  return `Halo, ${nama}`;
};
console.log(tampilNama2("Lavina"));

// multiple params
const tampilNama3 = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
};
console.log(tampilNama3("Lavina", "Malam"));

// implicit return
const tampilNama4 = (nama) => `Halo, ${nama}`;
console.log(tampilNama4("Lavina"));

// w/o param
const tampilNama5 = () => {
  return "Hello World";
};
console.log(tampilNama5());

let mahasiswa = ["Lavina", "Aden", "Anais"];
// w/o arrow function
let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);

// w arrow function
let jumlahHuruf1 = mahasiswa.map((nama) => nama.length);
console.log(jumlahHuruf1);

// return objects
let jumlahHuruf2 = mahasiswa.map((nama) => ({
  // nama, -> works
  nama: nama,
  jmlHuruf: nama.length,
}));
console.table(jumlahHuruf2);

// THIS KEYWORD
// constructor can't use arrow function
const Mahasiswa = function () {
  this.nama = "Lavina";
  this.umur = 19;
  // method can use arrow function
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };

  // arrow function with function declaration ☑️
  // setInterval(() => {
  //   console.log(this.umur++);
  // });
};

const lavina = new Mahasiswa();

// with object literal
const mhs1 = {
  nama: "Lavina",
  umur: 19,
  sayHello: function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  },
};

// case: caption box
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]; // reverse
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
