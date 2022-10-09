const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
 UserId:String,
 Title:String,
 Description:String,
 Body:String,
 Date:Date,

  
});

module.exports = mongoose.model("Notes", NotesSchema);
