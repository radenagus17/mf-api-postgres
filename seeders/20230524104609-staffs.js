"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblStaffs",
      [
        {
          userId: 1,
          isPermanent: true,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          isPermanent: true,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          isPermanent: true,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tblStaffs", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
