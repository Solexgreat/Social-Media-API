'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Like, {foreignKey: "userId", as: "like"})
      User.hasMany(models.Follower, {foreignKey: "userId", as: "follow"})
      User.hasMany(models.Comment, {foreignKey: "userId", as: "comment"})
      User.hasMany(models.Notification, {foreignKey: "userId", as: "notification"})
      User.hasMany(models.Post, {foreignKey: "userId", as: "post"})
      User.hasMany(models.Repost, {foreignkey: "userId", as: "repost"})
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashed_password: DataTypes.STRING,
    role: "user",
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};