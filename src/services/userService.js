const UserRepository = require('../repository/userRepository');
const bcrypt  = require('bcrypt');
const jwt  = require('jsonwebtoken');
class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
             const user =  await this.userRepository.create(data); 
             return user;
        } catch(error) {
            console.log('not able to signup');
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch(error) {
            throw error;
        }
    }

    async signin(email,password) {
        try {
            const user = await this.getUserByEmail(email);
            if(!user) {
                throw {
                    message: 'no user found'
                };
            }
            if(!this.comparePassword(password,user.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = this.createToken({email: user.email});
            return token;
        }catch(error) {
            throw error;
        }
    }

     comparePassword(plainPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(plainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparission");
            throw error;
        }    }

        createToken(user){
            try {
                const result = jwt.sign(user,'projectKey', { expiresIn : '1d'});
                return result;
    
            } catch (error) {
                console.log("Something went wrong in token creation");
                throw error;
            }
        }
}

module.exports = UserService;