const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var choiceSchema =  new Schema({
    text : String,
    // target : [{ type: Schema.Types.ObjectId, ref: 'Chapter' }]

  });
  
  var Choice  = mongoose.model('Choice', choiceSchema);

  module.exports = Choice
