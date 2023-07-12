"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pasiens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kelurahan, {
        foreignKey: "kelurahan_pasien",
      });
      // this.belongsTo(models.kelurahan, {
      //   foreignKey: "kecamatan_pasien",
      // });
      this.hasOne(models.tb_record, { foreignKey: "id" });
    }
  }
  pasiens.init(
    {
      kode_pasien: DataTypes.STRING,
      jenis_kelamin: DataTypes.STRING,
      umur: DataTypes.INTEGER,
      kecamatan_pasien: DataTypes.STRING,
      kelurahan_pasien: DataTypes.STRING,
      status_pekerjaan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pasiens",
    }
  );
  return pasiens;
};
