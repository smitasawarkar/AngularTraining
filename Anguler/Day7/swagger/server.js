const express = require('express');
const randomId = require('random-id');
const app = express(), bodyParser = require("body-parser"), fs = require('fs'), port = 3080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd() + "/swagger.css"), 'utf8');

// place holder for the data
let tasks = [
    {
        id: 1,
        task: 'task1',
        assignee: 'assignee1000',
        status: 'completed'
    },
    {
        id: 2,
        task: 'task2',
        assignee: 'assignee1001',
        status: 'completed'
    },
    {
        id: 3,
        task: 'task3',
        assignee: 'assignee1002',
        status: 'completed'
    },
    {
        id: 4,
        task: 'task4',
        assignee: 'assignee1000',
        status: 'completed'
    },

];

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));

app.get('/api/todos', (req, res) => {
    console.log('api/todos called!!!!!')
    res.json(tasks);
});
app.get('/api/todoGetById/:id', (req, res) => {
    const taskId = req.params.id; // Get the task ID from the request URL

    // Find the task with the specified ID in the tasks array
    const task = tasks.filter(task => task.id == taskId);

    if (!task) {
        // If task is not found, send a 404 error response
        return res.status(404).json({ error: 'Task not found' });
    }

    // If task is found, send it as a JSON response
    res.json(task);
});

app.post('/api/todo', (req, res) => {
    const task = req.body.task;
    task.id = randomId(10);
    tasks.push(task);
    res.json(tasks);
})

app.delete('/api/todo/:id', (req, res) => {
    console.log("Id to delete:::::", req.params.id)
    tasks = tasks.filter(task => task.id != req.params.id);
    res.json(tasks);
})

app.put('/api/todos/:id', (req, res) => {
    console.log("Id to update:::::", req.params.id)
    const taskToUpdate = req.body.task;
    tasks = tasks.map(task => {
        if (task.id == req.params.id) {
            task = taskToUpdate;
            task.id = parseInt(req.params.id);
        }
        return task;
    });
    res.json(tasks);
});

app.get('/', (req, res) => {
    res.send(`<h1>API Running on port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});
