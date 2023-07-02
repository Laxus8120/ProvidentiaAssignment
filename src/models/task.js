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
    User_id : {
      type : DataTypes.UUID,
      primaryKey : true,
      allowNull : false
    },
    title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    description: {
      type : DataTypes.TEXT,
      allowNull : false
    },
    dueDate: {
      type : DataTypes.DATE,
      allowNull : true
    }
,
    status: {
      type : DataTypes.ENUM('COMPLETED','NOT_COMPLETED'),
      defaultValue : 'NOT_COMPLETED'
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};