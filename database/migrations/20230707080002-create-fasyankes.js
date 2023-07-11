'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fasyankes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_fasyankes: {
        type: Sequelize.STRING
      },
      nama_fasyankes: {
        type: Sequelize.STRING
      },
      provinsi_fasyankes: {
        type: Sequelize.STRING
      },
      kab_kota_fasyankes: {
        type: Sequelize.STRING
      },
      jenis_fasyankes: {
        type: Sequelize.STRING
      },
      kepemilikan_fasyankes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('fasyankes');
  }
};