// Callback
// berarti memasukkan sebuah function sebagai argumen/parameter pada function lainnya

const users = [
  { username: "Lavina" },
  { username: "Aden" },
  { username: "Hana" },
];

// function getUsers() {
//   setTimeout(() => {
//     console.log(users);
//   }, 1000);
// }

function createUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
    // jadi user yang diinput akan di push dulu ke array baru function callbacknya akan dieksekusi
  }, 2000);
}

// createUser({ username: "Diva" }, getUsers);
// bisa juga dibuat seperti ini :
createUser({ username: "Diva" }, () => {
  setTimeout(() => {
    console.log(users);
  }, 1000);
});
