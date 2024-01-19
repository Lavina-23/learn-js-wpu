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
