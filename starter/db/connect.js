const mongoose = require("mongoose");

const connectionString = process.env.TZ

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB"))
    .catch((err) => console.log(err));
};



module.exports = connectDB;
