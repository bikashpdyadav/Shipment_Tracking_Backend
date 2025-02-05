const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  containerId: { type: String, required: true },
  route: [{ type: String }], 
  currentLocation: { type: String, required: true },
  currentETA: { type: Date },
  status: { type: String, enum: ['In Transit', 'Delivered', 'Pending'], default: 'Pending' }
});

const Shipment = mongoose.model('Shipment', ShipmentSchema);
module.exports = Shipment;
