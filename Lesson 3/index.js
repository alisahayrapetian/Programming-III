var express = require("express");
var app = express();

app.use(express.static("file:///Users/user/Desktop/Game%20OVER1/index.html"));

app.get("/", function(req, res){
   res.redirect("file:///Users/user/Desktop/Game%20OVER1/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
 