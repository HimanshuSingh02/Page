const router = require("express").Router();
const user = require('../Controllers/User');
const Notes = require('../Controllers/Notes');
const Todo = require('../Controllers/Todo');

//user APIs
router.post("/Register",user.UserRegistration);
router.post("/Login",user.Login);


//
router.post('/AddNotes',Notes.AddNotes);
router.delete('/DeleteNote/:NoteId',Notes.DeleteNote);
router.get('/GetAllNotes/:UserId',Notes.GetAllNotes);
router.get('/GetSpecificNote/:UserId/:NoteId',Notes.GetSpecificNote);
router.patch('/UpdateNote',Notes.UpdateNote);

router.post('/AddTodo/:UserId',Todo.AddTodo);
router.get('/GetAllTodo/:UserId',Todo.GetAllTodo);
router.delete('/DeleteTodo/:UserId/:TodoId',Todo.DeleteTodo);
router.get('/GetSpecificTodo/:UserId/:TodoId',Todo.GetSpecificTodo);
router.patch('/UpdateTodo/:UserId/:TodoId',Todo.UpdateTodo);


module.exports = router;
