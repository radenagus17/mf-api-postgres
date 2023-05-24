"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblMembers",
      [
        {
          userId: 4,
          activeExpired: new Date("2023-06-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tblMembers", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
