const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  personName: { type: String, required: true },
  firmName: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  deliveryLocation: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
