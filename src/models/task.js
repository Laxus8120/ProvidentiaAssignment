'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    task_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull : false
    },
    task_title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    task_description: {
      type : DataTypes.TEXT,
      allowNull : true
    },
    task_due_date: {
      type: DataTypes.DATE,
      allowNull : false
    },
    task_status: {
      type : DataTypes.ENUM('COMPLETED', 'NOT_COMPLETED'),
      defaultValue: 'NOT_COMPLETED',
      allowNull: false,

    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};