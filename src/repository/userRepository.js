const { User } = require('../models');
const { v4: uuidv4 } = require('uuid');

class UserRepository {

    async create(data){
        try {
            const response = await User.create({
                User_id : uuidv4(),
                email : data.email,
                password : data.password,
            });
            return response.dataValues;
        } catch(error) {
            console.log('not able to create a user');
            console.log(error);
            throw{error};
        }
    }

    async delete(id){
        try {
                await User.destroy({
                where: {
                  User_id: id
                }
              });
              return true;
        } catch (error) {
            console.log('not able to delete user');
            console.log(error);
            throw{error};
        }
    }

    async findBy(id){
        try {
            const data = await User.findOne({
                where: {
                    email: id.email
                  }                
            });
            return data;
        } catch(error) {
            console.log('not able to find the user ');
            throw{error};
        }
    }

}

module.exports = UserRepository;