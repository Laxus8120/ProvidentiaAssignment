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

const get = async (req,res) =>{

    try {
        const result = await taskService.get(req.body.id);
        return res.status(201).json({
            data : result,
            message : "succesfully get a task",
            success : true,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            data : {},
            message : "not able to  get a task",
            success : false,
            err: {}
        });
    }
}
const destroy = async ( req,res) =>{

    try {
        const result = await taskService.destroy(req.body.id);
        return res.status(201).json({
            data : result,
            message : "succesfully deleted a task",
            success : true,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            data : {},
            message : "not able to  deleted a task",
            success : false,
            err: {}
        });
    }
}
const update = async ( req,res) =>{

    try {
        const result = await taskService.update(req.body);
        return res.status(201).json({
            data : result,
            message : "succesfully update a task",
            success : true,
            err: {}
        });
    } catch (error) {
        return res.status(201).json({
            data : {},
            message : "not able to  update a task",
            success : false,
            err: {}
        });
    }
}

module.exports = {
    create,
    get,
    destroy,
    update
}