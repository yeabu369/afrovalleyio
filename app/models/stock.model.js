const mongoose = require('mongoose');

const { Schema } = mongoose;

const StockSchema = new Schema({
  name: String,
  description: String,
  category: String,
  quantity: Number,
  owner: String,
  ownerAddress: String,
  ownerAlgorandAddress: String,
  available: Boolean,
  forSale: Boolean,
});

module.exports = mongoose.model('Stock', StockSchema);
