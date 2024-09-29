'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Followers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      followId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference : {
          model: 'Users',
          key: "id"
      }
    },
      followerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference : {
          model: 'Users',
          key: "id"
      }
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Followers');
  }
};