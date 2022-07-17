const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/about",function(req,res){
  res.send("<h1>This is my project</h1>");
});

app.post("/",function(req,res){
  const num1 = parseInt(req.body.n1);
  const num2 = parseInt(req.body.n2);
  const object ={
    n1:num1,
    n2:num2,
    result : num1 + num2
  };
  res.send(object);
});



/// Port
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
