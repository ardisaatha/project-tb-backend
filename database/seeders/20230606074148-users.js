"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        username: "demoadmin",
        password: bcrypt.hashSync("demoadmin", 10),
        role: "admin",
        wilayah: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "DemoTawangsari",
        password: bcrypt.hashSync("demouser", 10),
        role: "user",
        wilayah: "Tawangsari",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
