const { Task } = require('../models');
const { v4: uuidv4 } = require('uuid');

class TaskRepository {

    async create(data){
        try {
            const response = await Task.create({
                task_id : uuidv4(),
                task_title : data.taskTitle,
                task_description : data.description,
                task_due_date : data.dueDate
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
                  task_id: id
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
            const task = await Task.findOne({ where: { task_id: data.id } });
            task.task_title = data.taskTitle;
            task.task_description  = data.description;
            await task.save();
            return task;
        } catch (error) {
            console.log('not able to create task');
            throw{error};
        }
    }
}

module.exports = TaskRepository;