const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
	res.send("API is Running ");
})

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log('Server Started on PORT'.yellow.bold, PORT.yellow.bold));

