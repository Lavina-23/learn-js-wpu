// 1. Object literal
// let mahasiswa = {
//     nama: 'Lavina',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// 2. Function declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     }
//     return mahasiswa;
// }

// let lavina = Mahasiswa('Lavina', 10);
// let yaya = Mahasiswa('Yaya', 20);

// 3. Constructor function
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan !`);
    }

    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat main`);
    }
}

let lavina = new Mahasiswa('Lavina', 10);

// 4. Object.create
