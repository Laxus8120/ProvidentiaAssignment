'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const SALT = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    User_id: {
      type : DataTypes.UUID,
      allowNull : false,
      primaryKey : true
    },
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail: true, // Ensure the value is a valid email address
      },
      allowNull : false
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate( (user)=> {
    const encryptedPassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptedPassword;
  })
  return User;
};