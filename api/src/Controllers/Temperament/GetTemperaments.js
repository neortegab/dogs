require('dotenv').config();
const { KEY, KEY_VALUE } = process.env;
const { Temperament } = require("../../db");
const { Op } = require('sequelize');
const axios = require("axios");

const URL = `https://api.thedogapi.com/v1/breeds`; 

const getAllTemperaments = async () => {
    try {
        const allTemperaments = await Temperament.findAll();
        if(allTemperaments.length > 0) return allTemperaments;

        else{
            const allDogsRequest = await axios.get(URL, { auth: {
                key: KEY,
                value: KEY_VALUE
            }});
    
            const allDogs = allDogsRequest.data;
    
            for(let i = 0; i < allDogs.length; i++){
                if(allDogs[i].temperament){    
                    const dogTemperaments = allDogs[i].temperament.split(',');
                    for(let i = 0; i < dogTemperaments.length; i++){
                        Temperament.findOrCreate({
                            where: { name: { [Op.iLike]: '%'+dogTemperaments[i].trim()+'%' } },
                            defaults: { name: dogTemperaments[i].trim() }
                        }).catch(error => new Error(error.message));
                    }      
                }
            }
            return Temperament.findAll().then(response => response).catch(error => new Error(error.message));
        }
    } catch (error) {
        throw new Error(`There was an error: ${error.message}`);
    }
}

module.exports = {
    getAllTemperaments
}