const express = require('express');
const router = express.Router();

const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);  // chaining routes with the same endpoints
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;