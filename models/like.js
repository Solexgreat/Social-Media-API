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
      Like.belongTo(models.User, {foreignkey: "userId", as: "user"})
      Like.belongTo(models.User, {foreignkey: "postId", as: "post"})

    }
  }
  Like.init({
    userid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};