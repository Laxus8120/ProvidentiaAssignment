const express = require('express');
const router = express.Router();

const {create} = require('../controller/taskController');

router.post('/task',create);

module.exports = router;