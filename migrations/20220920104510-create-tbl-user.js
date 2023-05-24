"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tblUsers", {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      noKtp: {
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      igAccount: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
      },
      haveWhatsapp: {
        type: Sequelize.BOOLEAN,
      },
      flagActive: {
        type: Sequelize.BOOLEAN,
      },
      agreePromo: {
        type: Sequelize.BOOLEAN,
      },
      isDataConflict: {
        type: Sequelize.BOOLEAN,
      },
      first_login: {
        type: Sequelize.BOOLEAN,
      },
      OTP: {
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
    await queryInterface.dropTable("tblUsers");
  },
};
