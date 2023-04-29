const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Temperament/temperamentController");

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await controller.getAllTemperaments());
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;