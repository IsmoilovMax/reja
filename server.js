
console.log('Web Serverni boshlash');
//npm i express (ustanovka)
const express = require("express");
const app = express();

//1 kirish code: expressga kerib kelayotgan kodlar (pablik ochiq, ochib berish deyiladi)
app.use(express.static("public"));
//kerib kelayotgan  datani jsonga o'zgartirib beradi
app.use(express.json());
//HTML tradishinal  ignordi oldini oladi
app.use(express.urlencoded({extended:true}));
const http = require("http");


//2: Session code


//3 Views code: fronenddi beken ichida yasaydigan views ejs(npm i ejs) bsr
app.set("views", "views"); // folderdi ozgaritmoqchi bolsak views di ozgartiramiz
app.set("view engine", "ejs") // view folderdan oqidigon

//4: Routing code: Routerlarga moljalangan 
//
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"}); //json shakldagi malumotdi qaytaradi

})
 //malumotdi date basedan olis uchun
app.get("/", function(req, res){
    res.render("harid");
})
//http bizning core modulimiz
//createServer(param) serverdi yasash uchun . parametr qabul qiladi
const server = http.createServer(app);
//malum bir portga listen qildiramiz
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});
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


