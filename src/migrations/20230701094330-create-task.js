'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      task_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull : false
      },
      task_title: {
        type: Sequelize.STRING,
        allowNull : false
      },
      task_description: {
        type: Sequelize.TEXT,
        allowNull : true
      },
      task_due_date: {
        type: Sequelize.DATE,
        allowNull : false
      },
      task_status: {
        type: Sequelize.ENUM('COMPLETED', 'NOT_COMPLETED'),
        defaultValue: 'NOT_COMPLETED',
        allowNull: false,
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