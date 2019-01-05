const mongoose = require('mongoose');

var Task = mongoose.model('Task', {
    tasknamename: { type: String },
    description: { type: String },
    subtask: { type: String }
    },'task');

module.exports = {
    Task: Task
};