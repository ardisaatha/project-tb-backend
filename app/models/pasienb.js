'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pasienb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kelurahan, {
        foreignKey: "id_kelurahan",
      });
      this.belongsTo(models.fasyankes, {
        foreignKey: "id_fasyankes",
      });
    }
  }
  pasienb.init({
    kode_pasien: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    jenis_kelamin: DataTypes.STRING,
    kecamatan_pasien: DataTypes.STRING,
    id_kelurahan: DataTypes.INTEGER,
    status_pekerjaan: DataTypes.STRING,
    id_fasyankes: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    bulan: DataTypes.STRING,
    tipe_diagnosis: DataTypes.STRING,
    anatomi_tb: DataTypes.STRING,
    riwayat_tb: DataTypes.STRING,
    riwayat_dm: DataTypes.STRING,
    riwayat_hiv: DataTypes.STRING,
    panduan_oat: DataTypes.STRING,
    sumber_obat: DataTypes.STRING,
    status_pengobatan: DataTypes.STRING,
    hasil_akhir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pasienb',
  });
  return pasienb;
};