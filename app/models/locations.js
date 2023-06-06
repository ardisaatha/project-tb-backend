'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locations.init({
    nama: DataTypes.STRING,
    jumlah_kasus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'locations',
  });
  return locations;
};