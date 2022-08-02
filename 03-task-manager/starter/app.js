
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config();
//middleware 

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager')
})


app.use('/api/v1/tasks', tasks)

//get all - get
//create new - post
//get single - get  ... :id
//update - patch/put ... :id
//delete - delete ... :id

const port = 3004;

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI);  
       app.listen(port, console.log(`server is listening ${port}`));
    } catch (error) {
        console.log(`ERROR! ${error}`)
    }
}; 

start()
