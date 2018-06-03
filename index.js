var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");

var makeupITroutes = require("./routes/ecommerce");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
   res.sendFile("index.html"); 
});

app.get("/:id", function(req,res){
    res.sendFile(__dirname + "/views/details.html");
});

app.get("/shoppingcart", function(req,res){
    res.sendFile(__dirname + "/views/shoppingcart.html");
});

app.use("/api/products", makeupITroutes);

app.listen(port,function(){
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});
