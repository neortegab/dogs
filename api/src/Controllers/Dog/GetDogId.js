const { Dog, Temperament } = require("../../db");
const { KEY, KEY_VALUE } = process.env;
const axios = require('axios');

const URL = `https://api.thedogapi.com/v1/breeds/`

const getDogById = async (id) => {
    try {
        let dog = await axios.get(`${URL}${id}`, {
            auth: {
              key: KEY,
              value: KEY_VALUE,
            }
        });
        if(dog.data.length === 0) dog = await Dog.findByPk(id, {include: Temperament});
        else dog = dog.data;
        return dog;
    } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
}

module.exports = {
    getDogById
}