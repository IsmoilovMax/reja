/*MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/


class Shop {
    constructor(non, lagmon, cola) {
        this.mahsulotlar = {
            non: non,
            lagmon: lagmon,
            cola: cola
        };
    }

    hozirgiVaqt() {
        const hozir = new Date();
        const soat = hozir.getHours();
        const daqiqa = hozir.getMinutes();
        return `${soat < 10 ? '0' : ''}${soat}:${daqiqa < 10 ? '0' : ''}${daqiqa}`;
    }

    log(xabar) {
        console.log(`Hozir ${this.hozirgiVaqt()} - ${xabar}`);
    }

    qoldiq() {
        const xabar = `${this.mahsulotlar.non} ta non, ${this.mahsulotlar.lagmon} ta lagmon va ${this.mahsulotlar.cola} ta cola mavjud!`;
        this.log(xabar);
        return xabar;
    }

    sotish(mahsulot, miqdor) {
        if (this.mahsulotlar[mahsulot] >= miqdor) {
            this.mahsulotlar[mahsulot] -= miqdor;
            this.log(`${miqdor} ta ${mahsulot} sotildi.`);
        } else {
            this.log(`${mahsulot} yetarli emas!`);
        }
    }

    qabul(mahsulot, miqdor) {
        this.mahsulotlar[mahsulot] += miqdor;
        this.log(`${miqdor} ta ${mahsulot} qabul qilindi.`);
    }
}

// Misol uchun foydalanish:
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // Hozir 20:40 - 4 ta non, 5 ta lagmon va 2 ta cola mavjud!
shop.sotish('non', 3); // Hozir 20:40 - 3 ta non sotildi.
shop.qabul('cola', 4); // Hozir 20:40 - 4 ta cola qabul qilindi.
console.log(shop.qoldiq()); // Hozir 20:40 - 1 ta non, 5 ta lagmon va 6 ta cola mavjud!



/*B-TASK: 

 ```Shunday function tuzing, u 1ta string parametrga ega bolsin, 
    hamda osha stringda qatnashgan raqamlarni 
    sonini bizga return qilsin.
    MASALAN countDigits("ad2a54y79wet0sfgb9")
    7ni return qiladi.```

function countDigits(str) {
    return str.split('')
    .filter(char => !isNaN(char) && char !== ' ')
    .length;
}

// Funksiyani chaqirish:
console.log(countDigits("ad2a54y79wet0sfgb9"));  
*/

/* TASK A
Shunday 2 parametrli function tuzing, 
hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini 
return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

function countLetter(letter, word) {
    // Harf va so'zni kichik harflar bilan tenglab
    const lowerCaseLetter = letter.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    
    // So'zni kichik harflarga aylantirib, filtrlash va uzunligini qaytarish uchun
    return lowerCaseWord.split('').filter(letter => letter === lowerCaseLetter).length;
}

// Misol
let natija = countLetter("S", "SeniorSoftwareEngineer");
console.log(natija);
*/

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
    else if(a > 20 && a <= 30) callback(w, list[1]);
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