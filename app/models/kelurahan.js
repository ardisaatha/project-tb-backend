'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelurahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.pasiens, {foreignKey: "kelurahan_pasien"})
      this.hasMany(models.pasienb, {foreignKey: "id_kelurahan"})
    }
  }
  kelurahan.init({
    nama_kelurahan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelurahan',
  });
  return kelurahan;
};