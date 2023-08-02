'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasienbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kode_pasien: {
        type: Sequelize.STRING
      },
      umur: {
        type: Sequelize.INTEGER
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      kecamatan_pasien: {
        type: Sequelize.STRING
      },
      id_kelurahan: {
        type: Sequelize.INTEGER
      },
      status_pekerjaan: {
        type: Sequelize.STRING
      },
      id_fasyankes: {
        type: Sequelize.INTEGER
      },
      tahun: {
        type: Sequelize.INTEGER
      },
      bulan: {
        type: Sequelize.STRING
      },
      tipe_diagnosis: {
        type: Sequelize.STRING
      },
      anatomi_tb: {
        type: Sequelize.STRING
      },
      riwayat_tb: {
        type: Sequelize.STRING
      },
      riwayat_dm: {
        type: Sequelize.STRING
      },
      riwayat_hiv: {
        type: Sequelize.STRING
      },
      panduan_oat: {
        type: Sequelize.STRING
      },
      sumber_obat: {
        type: Sequelize.STRING
      },
      status_pengobatan: {
        type: Sequelize.STRING
      },
      hasil_akhir: {
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
    await queryInterface.dropTable('pasienbs');
  }
};