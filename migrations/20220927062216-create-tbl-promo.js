"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tblPromos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      periodeStart: {
        type: Sequelize.DATE,
      },
      periodeEnd: {
        type: Sequelize.DATE,
      },
      typeVoucher: {
        type: Sequelize.STRING,
      },
      discountMax: {
        type: Sequelize.INTEGER,
      },
      minimumPurchase: {
        type: Sequelize.INTEGER,
      },
      usageQuota: {
        type: Sequelize.INTEGER,
      },
      forAll: {
        type: Sequelize.BOOLEAN,
      },
      nominal: {
        type: Sequelize.INTEGER,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      canCombine: {
        type: Sequelize.BOOLEAN,
      },
      isUnlimited: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("tblPromos");
  },
};
