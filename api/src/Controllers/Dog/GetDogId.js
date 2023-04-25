const { Dog } = require("../../db");

const getDogById = async (id) => {
    try {
        const dog = await Dog.findByPk(id);
        return dog;
    } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
}

module.exports = {
    getDogById
}