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
