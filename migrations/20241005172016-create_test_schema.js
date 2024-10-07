'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE SCHEMA IF NOT EXISTS test_schema');

    await queryInterface.createTable('Users', {
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
      }
    }, {
      schema: 'test_schema'
    });

    await queryInterface.createTable('testPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      videoUrl: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference : {
          model: 'testUsers',
          key: "id"
        }, }
    }, {
      schema: 'test_schema'
    });

    await queryInterface.createTable('testComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      videoUrl: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference : {
          model: 'testUsers',
          key: "id"
        }, },
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference : {
            model: 'testPosts',
            key: "id"
          }, }
    }, {
      schema: 'test_schema'
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comments', { schema: 'test_schema' });
    await queryInterface.dropTable('posts', { schema: 'test_schema' });
    await queryInterface.dropTable('users', { schema: 'test_schema' });

    // Drop the schema if needed
    await queryInterface.sequelize.query('DROP SCHEMA IF EXISTS test_schema CASCADE');
  }
};
