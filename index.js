var app = require("express")();
var a = require("fs").realpathSync(".");
app.use(require("express").static(a+"/public"));
app.get("/",function(req,res){
  res.sendFile(a+"/index.html");
});
app.listen(9001);