require('dotenv').config();
const { KEY, KEY_VALUE } = process.env;
const { Dog } = require("../../db");
const axios = require("axios");

let allDogs = [];
const URL = `https://api.thedogapi.com/v1/breeds`;

const getAllDogs = async () => {
    try{
        const dogsFromAPI = await axios.get(URL, { auth: {
            key: KEY,
            value: KEY_VALUE
        }});
        allDogs = dogsFromAPI.data;
        const dogsFromDB = await Dog.findAll();
        return allDogs.concat(dogsFromDB);
    } catch(error){
        throw new Error("The following error has been returned: " + error);
    }
};

module.exports = {
    getAllDogs,
}