const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL)
.then(connexion => {
    console.log('Connexion Okay !!!');
})
.catch(error => {
    console.log('Connexion not Okay !!!');
});

const app = express();

const taskRouter = require('./routes/task.route');

app.use(cors());
app.use('tasks', taskRouter);


app.listen(3000, () => {
    console.log('RUN ON PORT 3000');
});