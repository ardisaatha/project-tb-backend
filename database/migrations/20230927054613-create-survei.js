'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('surveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kelurahan: {
        type: Sequelize.INTEGER
      },
      nama_kelurahan: {
        type: Sequelize.STRING
      },
      literasi_excellent: {
        type: Sequelize.DECIMAL(3, 2)
      },
      literasi_inadequate: {
        type: Sequelize.DECIMAL(3, 2)
      },
      literasi_problematic: {
        type: Sequelize.DECIMAL(3, 2)
      },
      literasi_sufficient: {
        type: Sequelize.DECIMAL(3, 2)
      },
      avg_literasi: {
        type: Sequelize.STRING
      },
      persentase_literasi: {
        type: Sequelize.DECIMAL(3, 2)
      },
      stigma_rendah: {
        type: Sequelize.DECIMAL(3, 2)
      },
      stigma_sedang: {
        type: Sequelize.DECIMAL(3, 2)
      },
      stigma_tinggi: {
        type: Sequelize.DECIMAL(3, 2)
      },
      tidak_stigma: {
        type: Sequelize.DECIMAL(3, 2)
      },
      avg_stigma: {
        type: Sequelize.STRING
      },
      persentase_stigma: {
        type: Sequelize.DECIMAL(3, 2)
      },
      pengetahuan_baik: {
        type: Sequelize.DECIMAL(3, 2)
      },
      pengetahuan_buruk: {
        type: Sequelize.DECIMAL(3, 2)
      },
      pengetahuan_cukup: {
        type: Sequelize.DECIMAL(3, 2)
      },
      pengetahuan_kurang: {
        type: Sequelize.DECIMAL(3, 2)
      },
      avg_pengetahuan: {
        type: Sequelize.STRING
      },
      persentase_pengetahuan: {
        type: Sequelize.DECIMAL(3, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('surveis');
  }
};