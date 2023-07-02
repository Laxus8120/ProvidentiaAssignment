const { Task } = require('../models');
const { v4: uuidv4 } = require('uuid');

class TaskRepository {

    async create(data){
        try {
            const response = await Task.create({
                User_id : uuidv4(),
                title : data.taskTitle,
                description : data.description,
                dueDate : data.dueDate
            });
            return response;
        } catch (error) {
            console.log('not able to create task');
            console.log(error);
            throw{error};
        }
    }

    async delete(id){
        try {
                await Task.destroy({
                where: {
                  User_id: id
                }
              });
              return true;
        } catch (error) {
            console.log('not able to delete task');
            console.log(error);
            throw{error};
        }
    }

    async get(id){
        try {
            const data = await Task.findByPk(id)
            return data;
        } catch (error) {
            console.log('not able to find the  task');
            throw{error};
        }
    }

    async update(data){
        try {
            const task = await Task.findOne({ where: { Iser_id: data.id } });
            task.title = data.taskTitle;
            task.description  = data.description;
            await task.save();
            return task;
        } catch (error) {
            console.log('not able to create task');
            throw{error};
        }
    }
}

module.exports = TaskRepository;