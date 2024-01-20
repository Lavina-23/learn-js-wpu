const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// find numbers greater than 3
// using for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// using filter
const newAngka1 = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka1);

// filter with arrow function
const newAngka2 = angka.filter((a) => a >= 3);
console.log(newAngka2);

// map -> will create a new array
const newAngka3 = angka.map((a) => a * 2);
console.log(angka);
console.log(newAngka3); // new array

// reduce
const newAngka4 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(newAngka4);

// method chain
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);

// take the element's video
const videos1 = document.querySelectorAll("[data-duration]"); // -> nodelist
const videos = Array.from(document.querySelectorAll("[data-duration]")); // -> array
console.log(videos);

// select "JAVASCRIPT LANJUTAN" only
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // take the duration from each videos
  .map((item) => item.dataset.duration)

  // change the duration into float, change from minutes to second
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // add every seconds duration
  .reduce((total, detik) => total + detik);

// change the form into hour:minute:second
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// save it to DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;

console.log(pDurasi);
