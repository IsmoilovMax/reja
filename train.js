/* TASK A
Shunday 2 parametrli function tuzing, 
hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini 
return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
function countLetter(letter, word) {
    // Harf va so'zni kichik harflar bilan tenglab
    const lowerCaseLetter = letter.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    
    // So'zni kichik harflarga aylantirib, filtrlash va uzunligini qaytarish uchun
    return lowerCaseWord.split('').filter(harf => harf === lowerCaseLetter).length;
}

// Misol
let natija = countLetter("r", "SeniorSoftwareEngineer");
console.log(natija);


//22 Asynchronus functionlarni qo'llash
/*
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koproq hato qiling", //25-30
    "uzingizga ishlashdi boshlang", //30-40
    "sizni kuchli qiladigan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi damdi olorin sekin", //60
];


//define  
async function maslahatBering(a) {
    if(typeof a !== 'number') throw new Error("insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    }    
};

/*
//call qismi .then() ,  .catch()
console.log('passed here 0');
maslahatBering(25)
.then(data => {
    console.log('javob', data);
}).catch(err => {
    console.log("ERROR", err);
});
console.log('passed here 1');
*/
//async/await orqatli quriboldik
/*
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(30);
    console.log(javob);
    javob = await maslahatBering(65);
    console.log(javob);
}
run();
*/

//21 NodeJs event loop va Callback functionlar
/*
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koproq hato qiling", //25-30
    "uzingizga ishlashdi boshlang", //30-40
    "sizni kuchli qiladigan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi damdi olorin sekin", //60
];


function maslahatBering(a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
           callback(null, list[5]);
        }, 1000); 
        
    };
};

console.log('passed here 0');
maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
        console.log("javob:", data);
    }
});
console.log('passed here 1')
*/