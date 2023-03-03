'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('categories', { 
        id: {
          primaryKey: true,
          allowNull: false,
          autoIncrement: true, 
          type: Sequelize.INTEGER 
        },
        name: {
        allowNull: false,
        type: Sequelize.STRING
        }
  })
     
  },

  down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('categories');
     
  }
};

