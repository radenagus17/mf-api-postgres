"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tblPackageMemberships", {
      packageMembershipId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      package: {
        type: Sequelize.STRING,
      },
      subCategoryMembershipId: {
        type: Sequelize.INTEGER,
      },
      times: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      activeMember: {
        type: Sequelize.INTEGER,
      },
      sessionPtHours: {
        type: Sequelize.INTEGER,
      },
      classUsed: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tblPackageMemberships");
  },
};
