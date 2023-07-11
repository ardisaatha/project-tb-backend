'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pasiens, {
        foreignKey: "kode_pasien",
      });
      this.belongsTo(models.fasyankes, {
        foreignKey: "kode_fasyankes",
      });
    }
  }
  tb_record.init({
    kode_pasien: DataTypes.STRING,
    kode_fasyankes: DataTypes.STRING,
    tahun: DataTypes.INTEGER,
    bulan: DataTypes.STRING,
    tipe_diagnosis: DataTypes.STRING,
    anatomi_tb: DataTypes.STRING,
    riwayat_tb: DataTypes.STRING,
    riwayat_dm: DataTypes.STRING,
    hiv: DataTypes.STRING,
    panduan_oat: DataTypes.STRING,
    sumber_obat: DataTypes.STRING,
    status_pengobatan: DataTypes.STRING,
    hasil_akhir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_record',
  });
  return tb_record;
};