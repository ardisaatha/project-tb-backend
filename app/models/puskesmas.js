'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class puskesmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  puskesmas.init({
    kode_pusk: DataTypes.STRING,
    nama_pusk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'puskesmas',
  });
  return puskesmas;
};