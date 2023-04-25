const { Dog } = require("../../db");

const getDogByName = async (name) => {
    if(typeof name !== "string") throw new Error({ message: "The name provided isn't a string" });
    try {
        const dog = await Dog.findOne({ where: { name: name } });
        return dog;
    } catch (error) {
        throw new Error({status: 500, message: error});
    }
};

module.exports = {
    getDogByName
}