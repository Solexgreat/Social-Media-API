'use strict';
"npx sequelize-cli seed:generate --name demo-user"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     */

      await queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        hashed_password: 'hashed_password_here',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
      firstName: 'John',
      lastName: 'Doe1',
      email: 'john.doe1@example.com',
      hashed_password: 'hashed_password_here',
      createdAt: new Date(),
      updatedAtedAt: new Date(),
    },
    {
      firstName: 'John',
      lastName: 'Doe2',
      role: "admin",
      email: 'john.doe2@example.com',
      hashed_password: 'hashed_password_here',
      createdAt: new Date(),
      updatedAtedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
