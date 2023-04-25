const { getAllDogs } = require("./GetDogs");
const { getDogById } = require("./GetDogId");
const { getDogByName } = require("./GetDogName");
const { getDogByNameFromAPI } = require("./GetDogNameAPI");
const { postDog } = require("./PostDog");

module.exports = {
    getAllDogs,
    getDogById,
    getDogByName,
    getDogByNameFromAPI,
    postDog
}