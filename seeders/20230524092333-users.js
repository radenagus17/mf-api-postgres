"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tblUsers",
      [
        {
          username: "superadmin",
          password:
            "$2a$10$DxaBDCxIEFwPThox4heIB.WxjlirRJ3lvyghJWgYGGndxMxKPtYLm",
          email: "superadmin@gmail.com",
          roleId: 1,
          fullname: "Super Admin",
          nickname: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ms",
          password:
            "$2a$10$DxaBDCxIEFwPThox4heIB.WxjlirRJ3lvyghJWgYGGndxMxKPtYLm",
          email: "cs@gmail.com",
          roleId: 5,
          fullname: "MS",
          nickname: "MS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jacky",
          password:
            "$2a$10$DxaBDCxIEFwPThox4heIB.WxjlirRJ3lvyghJWgYGGndxMxKPtYLm",
          email: "jacky@gmail.com",
          roleId: 6,
          fullname: "Jacky",
          nickname: "Jacky",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "1800",
          password:
            "$2a$10$DxaBDCxIEFwPThox4heIB.WxjlirRJ3lvyghJWgYGGndxMxKPtYLm",
          email: "info@megafit.co.id",
          roleId: 2,
          fullname: "Mega",
          nickname: "Mega",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tblUsers", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
