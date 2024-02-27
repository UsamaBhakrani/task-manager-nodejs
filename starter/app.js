const express = require("express");
const app = express();
const port = 8080;
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// MiddleWare
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => res.send("Hello"));

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.put('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("Server running on port", port));
  } catch (error) {
    console.log(error);
  }
};

startServer();
