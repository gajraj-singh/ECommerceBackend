const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: {
    data:Buffer,
    contentType:String
  }
});

module.exports = mongoose.model('Product', productSchema);