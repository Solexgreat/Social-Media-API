'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('testUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      hashed_password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "user",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      schema: 'test_schema'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('testUsers');
  }
};