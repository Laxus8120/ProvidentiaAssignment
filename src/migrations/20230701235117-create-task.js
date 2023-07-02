'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      User_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull : false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull : true
      },
      status: {
        type: Sequelize.ENUM('COMPLETED','NOT_COMPLETED'),
        defaultValue : 'NOT_COMPLETED'
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
    await queryInterface.dropTable('Tasks');
  }
};