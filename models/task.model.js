const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    description: String,
    status: String,
    expected_date: String,
});

const Task = model('task', taskSchema);
Task.createCollection();

module.exports = Task;