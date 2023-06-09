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
    no: DataTypes.INTEGER,
    kc: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kd: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    wilayah: DataTypes.STRING,
    kode_puskesmas: DataTypes.STRING,
    kasus_aktif: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'locations',
  });
  return locations;
};