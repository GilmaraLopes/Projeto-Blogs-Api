const categorieService = require('../services/categorie.service');

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });  
  
    const newCategorie = await categorieService.createCategorie(name);
    // console.log('>>>>>>>>>>>>>>', newCategorie);
    res.status(201).json(newCategorie);
    } catch (e) {
      res.status(e.status).json({ message: e.message });
    }
};

module.exports = {
  createCategorie,
};