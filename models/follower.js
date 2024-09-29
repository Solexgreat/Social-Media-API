'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follower.belongsTo(models.User, {foreignKey: "userId", as: "user"})
    }
  }
  Follower.init({
    followedid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Follower',
  });
  return Follower;
};