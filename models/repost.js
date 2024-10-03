'use strict';
"npx sequelize-cli model:generate --name Repost --attributes quote:string"
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Repost.belongTo(models.User, {foreignkey: "userId", as: "user"})
      Repost.belongTo(models.Post, {foreignkey: "postId", as: "post"})

    }
  }
  Repost.init({
    quote: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Repost',
  });
  return Repost;
};