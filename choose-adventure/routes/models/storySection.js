const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var chapterSchema = new Schema({
    // _id  : Schema.Types.ObjectId,
    title : String,
    content  : String,
    choices : [{ type: Schema.Types.ObjectId, ref: 'Choice' }]
});




  var Chapter = mongoose.model('Chapter', chapterSchema);

  module.exports = Chapter


