const users = [
  { username: "Lavina" },
  { username: "Aden" },
  { username: "Hana" },
];

// Async Await
// lebih simple daripada promise

function getUsers() {
  setTimeout(() => {
    console.log(users);
  }, 1000);
}

const createUser = (user) => {
  return new Promise((resolve, reject) => {
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

const init = async () => {
  try {
    await createUser({ username: "Diva" }); // tunggu ini dieksekusi lebih dulu

    getUsers(); // lalu jalankan ini
  } catch (error) {
    console.log(error); // message error didapat dari reject
  }
};

init();

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
