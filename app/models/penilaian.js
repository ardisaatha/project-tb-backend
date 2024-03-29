"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class penilaian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.puskesmas, {
        foreignKey: "id_pusk",
      });
    }
  }
  penilaian.init(
    {
      id_pusk: DataTypes.INTEGER,
      kegiatan: DataTypes.STRING,
      satuan: DataTypes.STRING,
      target: DataTypes.STRING,
      sasaran: DataTypes.STRING,
      target_sasaran: DataTypes.STRING,
      realisasi: DataTypes.STRING,
      capaian: DataTypes.STRING,
      nilai: DataTypes.STRING,
      bulan: DataTypes.STRING,
      tahun: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "penilaian",
    }
  );
  return penilaian;
};
