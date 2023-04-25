require('dotenv').config();
const { KEY, KEY_VALUE } = process.env;
const { Dog } = require("../../db");
const axios = require("axios");

const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;

const getDogByNameFromAPI = async (name) => {
    if(typeof name !== "string") throw new Error({ message: "The name provided isn't a string" });
    try {
        name = name.toLowerCase().trim();
        const response = await axios.get(`${URL}${name}`, { auth: {
            key: KEY,
            value: KEY_VALUE
        }});
        return response.data;
    } catch (error) {
        throw new Error({status: 500, message: error});
    }
};

module.exports = {
    getDogByNameFromAPI
}