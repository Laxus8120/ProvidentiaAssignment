const  UserService = require("../services/userService")

const userService = new UserService();

 const signup  = async (req,res)=>{
    try {
        const user = await userService.signup(req.body);
        return res.status(201).json({
            success : true,
            message : ' created a user ',
            data : user,
            err: error
        })
    }catch(error) {
        res.status(500).json({
            success : true,
            message : ' something went wrong ',
            data : {},
            err: error
        })
    }
}

const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body.email, req.body.password);
        console.log(token)
        return res.status(201).json({
            success : true,
            message : ' sccessfully logged in',
            data : token,
            err: {}
        })
    } catch(error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    signup,
    login
}