'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.User, {foreignkey: "userId", as: "user"})
      Like.belongsTo(models.User, {foreignkey: "postId", as: "post"})

    }
  }
  Like.init({}, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};