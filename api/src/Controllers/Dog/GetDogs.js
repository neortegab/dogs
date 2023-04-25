const { Dog } = require("../../db");

const getAllDogs = async () => {
    try{
        return await Dog.findAll();
    } catch(error){
        throw new Error("Se ha producido el siguiente error: " + error);
    }
};

module.exports = {
    getAllDogs,
}