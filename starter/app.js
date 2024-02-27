const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

// MiddleWare
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", taskRouter);

app.use(notFound);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("Server running on port", port));
  } catch (error) {
    console.log(error);
  }
};

startServer();
