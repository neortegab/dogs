require('dotenv').config();
const { KEY, KEY_VALUE } = process.env;
const { Dog } = require("../../db");
const axios = require("axios");

let allDogs = [];
const URL = `https://api.thedogapi.com/v1/breeds`;

const getAllDogs = async () => {
    try{
        const response = await axios.get(URL, { auth: {
            key: KEY,
            value: KEY_VALUE
        }});
        allDogs = response.data;
        const dogs = await Dog.findAll();
        allDogs.concat(dogs);
        return allDogs;
    } catch(error){
        throw new Error("Se ha producido el siguiente error: " + error);
    }
};

module.exports = {
    getAllDogs,
}