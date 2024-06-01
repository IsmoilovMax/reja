
/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/

function hasDuplicateChars(str) {
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
              console.log(`Takrorlangan belgi ${str[i]} indekslari: ${i} va ${j}`);
              return true;
          }
      }
  }
  console.log("Takrorlangan belgi topilmadi");
  return false;
}

// Misollar:
console.log(hasDuplicateChars("welcome"));
console.log(hasDuplicateChars("Sound")); 