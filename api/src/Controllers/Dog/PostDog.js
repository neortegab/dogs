const { Dog, Temperament } = require("../../db");
const { Op } = require("sequelize");

const postDog = async (dog) => {
  const temperamentsMentioned = dog.temperament.split(",");
  let temperamentsForDog = [];
  try {
  temperamentsMentioned.forEach(async (temperament) => {
      const temperamentInDB = await Temperament.findOrCreate({
        where: { name: { [Op.iLike]: '%'+temperament.trim()+'%' } },
        defaults: { name: temperament }
      });
      temperamentsForDog.push(temperamentInDB[0]);
  });
    const newDog = await Dog.create(dog);
    newDog.setTemperaments(temperamentsForDog);
    return newDog; 
  } catch (error) {
    throw new Error(`There has been an error on the Database: ${error.message}`);
  }
};

module.exports = {
  postDog,
};
