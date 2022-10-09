const express = require("express");
const notesSchema =  require('../models/notes');

module.exports={
AddNotes,
DeleteNote,
GetAllNotes,
GetSpecificNote,
UpdateNote
}



async function AddNotes(req, res, next) {
  
    try {

const body = req.body;
     
      const data = await notesSchema.create({
       UserId:body.UserId,
       Title:body.Title,
       Description:body.Description,
       Body:body.Body,
       Date:new Date()

      });
              console.log("data->",data);
  
      return res.status(200).json("Notes Added Succesfully");
    } catch (error) {
      console.log("error : ", error);
      return next(error);
    }
  }

async function DeleteNote(req, res, next) {
  
    const id = req.params.NoteId;
    try {

     
     const data = await notesSchema.deleteOne({
        _id:id
     })
      
              console.log("data->",data);
  
      return res.status(200).json("Notes Deleted Succesfully");
    } catch (error) {
      console.log("error : ", error);
      return next(error);
    }
  }

async function GetAllNotes(req, res, next) {
  
    const id = req.params.UserId;
    try {

     
     const data = await notesSchema.find({
        UserId:id
     }).sort({ Date: -1 });
      
  
      return res.status(200).json({data});
    } catch (error) {
      console.log("error : ", error);
      return next(error);
    }
  }

async function GetSpecificNote (req,res,next){
            
    const userId = req.params.UserId;
    const noteId= req.params.NoteId;

try{
const data = await notesSchema.findOne({UserId:userId,_id:noteId});
return res.status(200).json({data});


}catch(error){
    console.log("error : ", error);
    return next(error);
}

}
async function UpdateNote (req,res,next){
            
    const body = req.body;
try{

const data = await notesSchema.findByIdAndUpdate({UserId:body.UserId,_id:body.NoteId},{Title:body.Title,Description:body.Description,Body:body.Body})
    return res.status(200).json({data});


}catch(error){
    console.log("error : ", error);
    return next(error);
}

}
