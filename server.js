var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");
var app = express();
var port = process.env.PORT || 8823;

var config = require("./config.js");

mongoose.connect(config.db, function(err){
  if(err)
    console.error(err);
  console.log("Db conn sucesss: %s", config.db.split("@")[1]);
});


app.use(express.static(path.join(__dirname, "/public")));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(port, function(){
  console.log("Application is listening on %s", port);
});
