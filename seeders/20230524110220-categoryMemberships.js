"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblCategoryMemberships",
      [
        {
          categoryMembership: "Membership",
          mainPackageId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Personal Trainer",
          mainPackageId: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Trial",
          mainPackageId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Cuti",
          mainPackageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Personal Trainer Online",
          mainPackageId: 77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Paket Kelas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Product Megafit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "1 Day Pass",
          mainPackageId: 83,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryMembership: "Weekend Pass",
          mainPackageId: 94,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tblCategoryMemberships", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
