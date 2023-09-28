'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survei extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.survei, {
        foreignKey: "id_kelurahan",
      });
      // define association here
    }
  }
  survei.init({
    id_kelurahan: DataTypes.INTEGER,
    nama_kelurahan: DataTypes.STRING,
    literasi_excellent: DataTypes.DECIMAL(3, 2),
    literasi_inadequate: DataTypes.DECIMAL(3, 2),
    literasi_problematic: DataTypes.DECIMAL(3, 2),
    literasi_sufficient: DataTypes.DECIMAL(3, 2),
    avg_literasi: DataTypes.STRING,
    persentase_literasi: DataTypes.DECIMAL(3, 2),
    stigma_rendah: DataTypes.DECIMAL(3, 2),
    stigma_sedang: DataTypes.DECIMAL(3, 2),
    stigma_tinggi: DataTypes.DECIMAL(3, 2),
    tidak_stigma: DataTypes.DECIMAL(3, 2),
    avg_stigma: DataTypes.STRING,
    persentase_stigma: DataTypes.DECIMAL(3, 2),
    pengetahuan_baik: DataTypes.DECIMAL(3, 2),
    pengetahuan_buruk: DataTypes.DECIMAL(3, 2),
    pengetahuan_cukup: DataTypes.DECIMAL(3, 2),
    pengetahuan_kurang: DataTypes.DECIMAL(3, 2),
    avg_pengetahuan: DataTypes.STRING,
    persentase_pengetahuan: DataTypes.DECIMAL(3, 2)
  }, {
    sequelize,
    modelName: 'survei',
  });
  return survei;
};