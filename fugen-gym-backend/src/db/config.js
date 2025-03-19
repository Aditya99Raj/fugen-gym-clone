const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const retry = require('retry');

dotenv.config();


const DbConnection = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Db connection successful");
      } catch (err) {
        console.error("Db connection failed", err);
      }
}

module.exports = DbConnection;