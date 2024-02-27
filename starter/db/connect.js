const mongoose = require("mongoose");

const connectionString = process.env.TZ

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB"))
    .catch((err) => console.log(err));
};

const taskSchema = mongoose.Schema({
  task: String,
  isCompleted: Boolean,
  date: { type: Date, default: Date.now },
});

const Task = mongoose.model("Tasks", taskSchema);

module.exports = connectDB;
