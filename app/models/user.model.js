const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    surName: String,
    tel: String,
    dob: Date,
    password: String,
    confirmed: {
      type: Boolean,
        default: false
    },
    role: 
      {
        type: String,
        default: "user"
      }
    
  })
);

module.exports = User;
