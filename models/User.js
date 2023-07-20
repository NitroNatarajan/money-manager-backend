const mongoose = require("mongoose");
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide your name please..'],
      },
      email: {
        type: String,
        required: [true, 'Please provide your valid email..'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email'],
      },
      password: {
        type: String,
        required: [true, 'provide us the secret of yours'],
        minLength: 8,
        select: false,
      }
}) 

  
const User = mongoose.model("User",userSchema)

module.exports = User;