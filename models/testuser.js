'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      testUser.hasMany(models.testPost, {foreignKey: "testUserId", as: "testPost"})
      testUser.hasMany(models.testComment, {foreignKey: "testUserId", as: "testComment"})

    }
  }
  testUser.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    role: "user",
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testUser',
    schema: 'test_schema'
  });
  return testUser;
};