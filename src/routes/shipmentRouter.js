const express = require('express');
const router = express.Router();
const Shipment = require('../models/shipment');

router.get('/shipments', async (req, res) => {
    try {
        const shipments = await Shipment.find();
        res.json({ message: "Shipment data fetched successfully", shipments });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/shipment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const shipment = await Shipment.findOne({_id: id});
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
        res.json({ message: "Shipment data fetched successfully!", shipment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/shipment/:id/update-location', async (req, res) => {
    try {
        const id = req.params.id;
        const { currentLocation } = req.body;
        const shipment = await Shipment.findByIdAndUpdate(
            id,
            { currentLocation },
            { new: true }
        );
        res.json({ message: "Shipment location updated successfully!", shipment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/shipment', async (req, res) => {
    try {
        const { shipmentId, containerId, route, currentLocation, currentETA, status } = req.body;
        const newShipment = new Shipment({ shipmentId, containerId, route, currentLocation, currentETA, status });
        await newShipment.save();
        res.status(201).json(newShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
