const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: "usersCollection",
    });

    console.log(
      `MongoDB Connected: ${connection.connection.host}, Database: ${connection.connection.name}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
