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

    async destroy(){
        try {
            
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }

    async get(){
        try {
            
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }

    async update(){
        try {
            
        } catch (error) {
            console.log('something went wrong in service layer');
            throw{error};
        }
    }
}

module.exports = TaskService;