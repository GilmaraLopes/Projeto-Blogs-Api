const { Category } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Category.create({ name });
  // console.log('?????????????????', categorie.dataValues);
  return categorie.dataValues;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategorie,
  getCategories,
};