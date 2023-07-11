'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fasyankes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tb_record, {foreignKey: "kode_fasyankes"})
    }
  }
  fasyankes.init({
    kode_fasyankes: DataTypes.STRING,
    nama_fasyankes: DataTypes.STRING,
    provinsi_fasyankes: DataTypes.STRING,
    kab_kota_fasyankes: DataTypes.STRING,
    jenis_fasyankes: DataTypes.STRING,
    kepemilikan_fasyankes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fasyankes',
  });
  return fasyankes;
};