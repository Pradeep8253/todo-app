const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://todo:pradeep123@cluster0.pzgvldc.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
