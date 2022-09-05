const express = require("express");

const http = require("https");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/dog", function(req, res){
    res.sendFile(__dirname + "/dogs.html")
});

app.post("/api", function(req, res){
    console.log(req.body);
})


app.listen(3000, function(req, res){
    console.log("Server is now running on port : 3000");
});



