const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  firstName: String,
  surName: String,
  algorandAddress: String,
  phoneNumber: String,
  dob: Date,
  password: String,
  confirmed: {
    type: Boolean,
    default: false,
  },
  role:
  {
    type: String,
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserSchema);
