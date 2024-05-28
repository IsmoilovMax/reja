/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

function checkContent(str1, str2) {
    // Har ikkala stringni harflar bo'yicha saralash va solishtirish
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
  
  // Test
  console.log(checkContent("mitgroup", "gmtiprou")); // true
  console.log(checkContent("example", "elpmaxe")); // true
  console.log(checkContent("hello", "world")); // false
  