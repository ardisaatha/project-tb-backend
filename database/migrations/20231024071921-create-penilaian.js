'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('penilaians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pusk: {
        type: Sequelize.INTEGER
      },
      kegiatan: {
        type: Sequelize.STRING
      },
      satuan: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      sasaran: {
        type: Sequelize.STRING
      },
      target_sasaran: {
        type: Sequelize.STRING
      },
      realisasi: {
        type: Sequelize.STRING
      },
      capaian: {
        type: Sequelize.STRING
      },
      nilai: {
        type: Sequelize.STRING
      },
      bulan: {
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('penilaians');
  }
};