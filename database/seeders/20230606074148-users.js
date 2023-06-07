'use strict';
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        username: "demoadmin",
        password: bcrypt.hashSync("demoadmin", 10),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "demoepid",
        password: bcrypt.hashSync("demoepid", 10),
        role: "epid",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "demoperawat",
        password: bcrypt.hashSync("demoperawat", 10),
        role: "perawat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        username: "demolab",
        password: bcrypt.hashSync("demolab", 10),
        role: "lab",
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
