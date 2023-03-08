const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  // console.log('?????????????????', categorie.dataValues);
  return categorie.dataValues;
};

module.exports = {
  createCategorie,
};