const express = require("express");
const app = express();
const mongoose = require("mongoose");
const carsRouter = require("./routes/CarsAPIs");
const usersRouter = require("./routes/UsersAPIs");
const authRouter = require("./routes/AuthAPIs");
const chatRouter = require("./routes/ChatAPIs");
const server = require("http").createServer(app);
const Chats = require("./models/ChatModel");
const path = require("path");
const { port, mongodb } = require("./utils/utils");
// Setting  CORS
app.use(require("cors")());
app.use(require("express").json());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:19001",
  },
});

app.use("/api", carsRouter);
app.use("/api", usersRouter);
app.use("/api", authRouter);
app.use("/api", chatRouter);

// Socket.io Code
async function saveMessage(payload) {
  chat = await Chats.findById(payload.conversationId);
  chat.chat = [
    ...chat.chat,
    {
      message: payload.message,
      date: payload.date,
      senderId: payload.senderId,
    },
  ];
  chat.save();
  return;
}

let users = [];

io.on("connection", async (socket) => {
  socket.on("join", (data) => {
    socket.join(data.conversationId);
  });
  socket.on("chat", (payload) => {
    payload = { ...payload, date: Date.now() };
    saveMessage(payload);
    io.sockets.in(payload.conversationId).emit("chat", payload);
  });
});

// Defining Port for Server
var os = require("os");
var hostname = os.hostname();
server.listen(port, () => {
  console.log(hostname);
  console.log(`Application listening on port ${port}!`);
});

// Connecting to MongoDB

mongoose.Promise = global.Promise;
mongoose
  .connect(mongodb + "FYP", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use(express.static(path.join(__dirname, "build")));
app.get("**", (req, res) => {
  res.sendFile(path.resolve("build/index.html"));
});
