const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var chapterSchema = new Schema({
    _id  : Schema.Types.ObjectId,
    title : String,
    content  : String,
    choices : [{ type: Schema.Types.ObjectId, ref: 'Choice' }]
});



var choiceSchema = Schema({
    text : String,
    target : [{ type: Schema.Types.ObjectId, ref: 'Chapter' }]

  });
  
  var Choice  = mongoose.model('Choice', choiceSchema);
  var Chapter = mongoose.model('Chapter', chapterSchema);



