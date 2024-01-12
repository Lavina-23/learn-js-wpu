// 1. Object literal
// (-) Tidak bisa untuk objek yang banyak
// let mahasiswa = {
//     nama: 'Lavina',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// 2. Function declaration
// (-) Memakan banyak penyimpanan

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     },
//     main : function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     },

//     tidur : function (jam) {
//         this.energy += jam * 2;
//         console.log(`Halo ${this.name}, selamat tidur !`)
//     }
// };

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// 3. Constructor function
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }

//     this.main = function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     }
// }

// let lavina = new Mahasiswa('Lavina', 10);

// prototype
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energy += porsi;
//   return `Halo ${this.nama}, selamat makan !`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Halo ${this.nama}, selamat bermain !`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energy += jam;
//   return `Halo ${this.nama}, selamat tidur !`;
// };

// let lavina = new Mahasiswa("Lavina", 10);

// prototype class version
class Mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan !`;
  }

  main(jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, selamat bermain !`;
  }

  tidur(jam) {
    this.energy += jam;
    return `Halo ${this.nama}, selamat tidur !`;
  }
}

let lavina = new Mahasiswa("Lavina", 10);
