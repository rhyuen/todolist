var mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
  title: {type: String, required: true},
  todo: {type: String, required: true}
});

module.exports = mongoose.model("Todo", todoSchema);
