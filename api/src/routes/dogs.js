const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Dog/dogController");

router.get("/", async (req, res) => {
    const { name } = req.query;
    if(!name){
        try{
            res.status(200).json(await controller.getAllDogs());
        } catch(error){
            res.status(400).json({ error: error.message });
        }
    }
    else{
        try {
            res.status(200).json(await controller.getDogByName(name));
        } catch (error) {
            if(error.message === `There was an error: There is no dog with the name ${name}`) res.status(404).json({ error: error.message });
            else res.status(400).json({ error: error.message });
        }
    }
       
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;  
    try {
        res.status(200).json(await controller.getDogById(id));
    } catch (error) {
        res.json({ error: error.message });
    }
});


module.exports = router;
