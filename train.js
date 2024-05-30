/*
E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

function getReverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Misol uchun:
let result = getReverse("ISMOILOV");
console.log(result);  // Natija: "olleh"
