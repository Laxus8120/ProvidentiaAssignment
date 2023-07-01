const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskController');

router.post('/task',taskController.create);
router.get('/find',taskController.get)
router.delete('/delete',taskController.destroy);
router.patch('/update',taskController.update)
module.exports = router;