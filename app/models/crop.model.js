const mongoose = require('mongoose');

const { Schema } = mongoose;

const CropSchema = new Schema({
  name: String,
  description: String,
  category: String,
});

module.exports = mongoose.model('Crop', CropSchema);
