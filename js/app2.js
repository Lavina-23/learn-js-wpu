const users = [
  { username: "Lavina" },
  { username: "Aden" },
  { username: "Hana" },
];

// Promise
// function getUsers() {
//   setTimeout(() => {
//     console.log(users);
//   }, 1000);
// }

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    // intinya dengan promise bisa diatur jika berhasil maka resolve jika gagal maka reject
    // dengan promise bisa mengatur error handling

    setTimeout(() => {
      users.push(user);

      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong !");
      }
    }, 2000);
  });
};

// createUser({ username: "Diva" })
//   .then(getUsers)
//   .catch((message) => {
//     console.log(message);
//   });

// bisa juga dibuat seperti ini:
createUser({ username: "Diva" })
  .then(() => {
    setTimeout(() => {
      console.log(users);
    }, 1000);
  })
  .catch((message) => {
    console.log(message);
  });
