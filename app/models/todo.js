var mongoose = require("mongoose");

module.exports = mongoose.model('Blog', {
  text : String,
  done : Boolean
});
