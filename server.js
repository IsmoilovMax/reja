const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://maxmudjon2121:9492121husniya@cluster0.n0qthwx.mongodb.net/Reja?"

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succedd");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3045;
        server.listen(PORT, function() {
            console.log(
                `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
         });
        }
    }
);