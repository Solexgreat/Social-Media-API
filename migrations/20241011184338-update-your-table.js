'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('users', 'status', {
      types: Sequelize.STRING,
      defaultValue: 'active',
    });

    await queryInterface.addColumn('posts', 'isApproved', {
      types: Sequelize.BOOLEAN,
      defaultValue: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'status');
    await queryInterface.removeColumn('posts', 'isApproved');
  }
};
