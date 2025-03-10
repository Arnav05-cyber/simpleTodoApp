const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://arnavvyas06:WarvJEPfF5rjL55z@todoapplicationserver.3792k.mongodb.net/todos`);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
}