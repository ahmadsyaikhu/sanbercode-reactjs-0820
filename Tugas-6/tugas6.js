console.log("---SOAL 1---");
const pi = 3.14;
// const r  = 5;

// luaslingkaran
const luasLingkaran = (r) => {
  let luas = pi * r * r;
  return luas;
};

const kelilingLingkaran = (r) => {
  let keliling = 2 * pi * r;
  return keliling;
};
console.log(luasLingkaran(6));
console.log(kelilingLingkaran(6));

console.log("---SOAL 2---");

let kata1 = `saya`;
let kata2 = `adalah `;
let kata3 = `seorang `;
let kata4 = `frontend `;
let kata5 = `developer`;

let kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;

console.log(kalimat);

console.log("---SOAL 3---");
const newFunction = function literal(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
};
newFunction("William", "Imoh");

console.log("---SOAL 4---");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
const { firstName, lastName, destination, occupation, spell } = newObject;

console.log(newObject);

console.log("---SOAL 5---");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
// ES5
// const combined = west.concat(east)
// console.log(combined)
// ES6
const combined = [...west, ...east];
console.log(combined);
