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

    // resolve mengubah status dari pending ke fulfilled lalu valuenya akan dikirim ke handler .then()
    // reject mengubah status dari pending ke rejected lalu value dari error (biasanya error message) akan dikirim ke handler .catch()

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
