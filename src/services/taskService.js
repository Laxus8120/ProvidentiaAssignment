const { response } = require('express');
const TaskRepository = require('../repository/taskRepository');

class TaskService {

    constructor(){
        this.taskRepository = new TaskRepository();
    }

    async create(data){
        try {
            const response = await this.taskRepository.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }

    async destroy(id){
        try {
            const result = await this.taskRepository.delete(id);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }

    async get(id){
        try {
            const result  = await this.taskRepository.get(id);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }

    async update(data){
        try {
            const result = await this.taskRepository.update(data);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }
}

module.exports = TaskService;