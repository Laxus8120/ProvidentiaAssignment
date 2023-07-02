'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      User_id: {
        type: Sequelize.UUID,
        allowNull : false,
        primaryKey : true
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
          isEmail: true, // Ensure the value is a valid email address
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};