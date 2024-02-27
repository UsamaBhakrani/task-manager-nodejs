const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [10, "Name 10 or Less "],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
