"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblRoles",
      [
        {
          role: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "member",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "FM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "CS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "PT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "Admin Kelas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tblRoles", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
