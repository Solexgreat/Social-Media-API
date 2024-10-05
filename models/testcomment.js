'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      testComment.belongsTo(models.testUser, {foreignKey: "testUserId", as: "testUser"})
      testComment.belongsTo(models.testPost, {foreignKey: "testPostId", as: "testPost"})
    }
  }
  testComment.init({
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testComment',
    schema: 'test_schema'
  });
  return testComment;
};