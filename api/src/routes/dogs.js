const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Dog/dogController");

router.get("/", (req, res) => {
    try{
        res.status(200).json(controller.getAllDogs());
    } catch(error){
        res.status(400).json(error);
    }
})

module.exports = router;
