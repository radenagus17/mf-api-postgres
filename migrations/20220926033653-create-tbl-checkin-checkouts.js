"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tblCheckinCheckouts", {
      checkId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      adminCheckin: {
        type: Sequelize.INTEGER,
      },
      adminCheckout: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      checkinTime: {
        type: Sequelize.TIME,
      },
      checkoutTime: {
        type: Sequelize.TIME,
      },
      lockerKey: {
        type: Sequelize.STRING,
      },
      isReservation: {
        type: Sequelize.BOOLEAN,
      },
      reservationTime: {
        type: Sequelize.TIME,
      },
      noBottle: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("tblCheckinCheckouts");
  },
};
