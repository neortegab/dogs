const { Dog } = require("../../db");

const getAllDogs = async () => {
    try{
        const dogs = await Dog.findAll();
        return dogs ? dogs : { message: "There are no dogs yet" };
    } catch(error){
        throw new Error("Se ha producido el siguiente error: " + error);
    }
};

module.exports = {
    getAllDogs,
}