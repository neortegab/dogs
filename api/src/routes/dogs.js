const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Dog/dogController");

router.get("/", async (req, res) => {
    try{
        res.status(200).json(await controller.getAllDogs());
    } catch(error){
        res.status(400).json(error);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if(!id) res.status(400).json({ error: "No id was provided" });   
    try {
        res.status(200).json(await controller.getDogById(id));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
