'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('blog_posts', { 
        id: {
          primaryKey: true,
          allowNull: false,
          autoIncrement: true, 
          type: Sequelize.INTEGER 
        },
        title: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          field: 'user_id',
          references: {
          model: 'users',
          key: 'id',
        }
        },
        published: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()') 
        },
        updated: {
          allowNull: false,
          type: Sequelize.DATE
        }

  })
     
  },

  down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('blog_posts');
     
  }
};

