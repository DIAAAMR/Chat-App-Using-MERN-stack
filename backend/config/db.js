const mongoose = require("mongoose");

const connectDB = async () => {
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

	console.log("MongoDB Connected: ".red.bold, conn.connection.host.red.bold);
	}catch (error){
		console.log("Error: ", error.message);
		process.exit();
	}
};

module.exports = connectDB;