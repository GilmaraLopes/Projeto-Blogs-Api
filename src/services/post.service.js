const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  console.log('service >>>>>', posts);
  return posts;
};

module.exports = {
  getPosts,
};