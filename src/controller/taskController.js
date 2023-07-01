const TaskService  = require('../services/taskService');

const taskService = new TaskService();

const create = async ( req,res) =>{

    try {
        const result = await taskService.create(req.body);
        return res.status(201).json({
            data : result,
            message : "succesfully created a task",
            success : true,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            data : {},
            message : "not able to  created a task",
            success : false,
            err: {}
        });
    }
}

module.exports = {
    create
}