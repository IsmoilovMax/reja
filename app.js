
console.log('Web Serverni boshlash');
//npm i express (ustanovka)
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "UTF-8", (err, data) =>{
//     if(err) {
//         console.log("ERROR", err);
//     } else {
//         user = JSON.parse(data)
//     }
// });

//MongoDB chaqirish
const  db = require("./server").db();


/*1 kirish code: expressga kerib kelayotgan kodlar 
(pablik ochiq, ochib berish deyiladi)*/
app.use(express.static("public"));
//kerib kelayotgan  datani jsonga o'zgartirib beradi
app.use(express.json());
//HTML tradishinal  ignordi oldini oladi
app.use(express.urlencoded({extended:true}));



//2: Session code


//3 Views code: fronenddi beken ichida yasaydigan views ejs(npm i ejs) bssr
app.set("views", "views"); // folderdi ozgaritmoqchi bolsak views di ozgartiramiz
app.set("view engine", "ejs"); // view folderdan oqidigon

//4: Routing code: Routerlarga moljalangan 
//
app.post("/create-item", (req, res) => {
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong')
        } else {
            res.end('successfully added');
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", {user: user} );
})

 //malumotdi date basedan olish uchun
app.get("/", function(req, res){
    
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else {
            res.render("reja", {items: data});
        }    
    });
});

module.exports = app; 

//npm start
//npm i nodemon bundan keyin (npm run dev) ishlatish kere
//.gitignore=.+node_modules
//git init
//git status
//git add .
//git status
//git commit -m "BRR:mavzu nomi"
//git log --oneline
//git status
//git branch
//git remote
//git push orign masters
//function - async -sync
//Tradional = > BSSR
//MODERN 


//REQUEST  =>Traditional API(HTML), (Rest API, Graphl Api)(JSON) toliq modern