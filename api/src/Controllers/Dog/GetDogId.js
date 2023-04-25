const { Dog, Temperament } = require("../../db");

const getDogById = async (id) => {
    try {
        const dog = await Dog.findByPk(id, {include: Temperament});
        return dog;
    } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
}

module.exports = {
    getDogById
}