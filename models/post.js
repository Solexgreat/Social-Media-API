'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Like, {foreignKey: "postId", as: "like"})
      Post.hasMany(models.Comment, {foreignKey: "postId", as: "comment"})
      Post.belongTo(models.User, {foreignkey: "userId", as: "user"})
    }
  }
  Post.init({
    content: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};