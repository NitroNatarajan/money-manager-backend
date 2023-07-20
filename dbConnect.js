const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection

connection.on("error", (err)=>{
    console.log(err)
})

connection.on("connected", ()=>{
    console.log('DB Connected Successfully')
})
