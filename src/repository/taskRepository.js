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

    async delete(){
        try {
            
        } catch (error) {
            console.log('not able to create task');
            throw{error};
        }
    }

    async get(){
        try {
            
        } catch (error) {
            console.log('not able to create task');
            throw{error};
        }
    }

    async update(){
        try {
            
        } catch (error) {
            console.log('not able to create task');
            throw{error};
        }
    }
}

module.exports = TaskRepository;