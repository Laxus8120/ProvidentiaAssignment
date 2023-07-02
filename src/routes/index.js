const express = require('express');
const router = express.Router();
const {authenticate}  = require('../middleware/authenticate');
const taskController = require('../controller/taskController');
const userController = require('../controller/userController')
router.post('/signup', userController.signup);
router.post('/login',userController.login);
router.post('/task',authenticate,taskController.create);
router.get('/find',authenticate,taskController.get)
router.delete('/delete',authenticate,taskController.destroy);
router.patch('/update',authenticate,taskController.update)
module.exports = router;