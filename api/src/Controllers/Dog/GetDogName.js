require('dotenv').config();
const { KEY, KEY_VALUE } = process.env;
const { Dog } = require("../../db");
const { Op } = require("sequelize");
const axios = require('axios');

const URL = `https://api.thedogapi.com/v1/breeds/search?q=`;

const getDogByName = async (name) => {
  if (typeof name !== "string")
    throw new Error({ message: "The name provided isn't a string" });

    try {
        const dogFromAPI = await axios.get(`${URL}${name}`, {
            auth: {
              key: KEY,
              value: KEY_VALUE,
            }
        });
        if(dogFromAPI.data.length === 0){
            try {
                const dog = await Dog.findOne({ where: { name: { [Op.iLike]: `%${name}%` } } });
                if(!dog) throw new Error(`There is no dog with the name ${name}`);
                return dog;
            } catch (error) {
                throw new Error(`There was an error: ${error.message}`);
            }
        }
        else return dogFromAPI.data[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
  getDogByName,
};
