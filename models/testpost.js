'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      testPost.belongTo(models.testUser, {foreignkey: "testUserId", as: "testUser"})
      testPost.hasMany(models.testComment, {foreignKey: "testPostId", as: "testComment"})
    }
  }
  testPost.init({
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testPost',
    schema: 'test_schema'
  });
  return testPost;
};