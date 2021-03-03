const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var chapterSchema = new Schema({
  // _id  : Schema.Types.ObjectId,
  title: {
    type: String
  },
  content: {
    type: String
  },
  choices: [{
    text: "string",
    by: mongoose.Schema.Types.ObjectId
  }],
});
var Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter