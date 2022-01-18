module.exports = app => {
    const task = require("../controllers/TaskController.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tasks
    router.get("/", task.findAll);
  
    // Retrieve all Tasks with given Due Date
    router.get("/published", task.findAllOnDueDate);
  
    // Update a Task with id
    router.put("/setduedate/:id", task.update);

    router.get("/duedate/:id", task.findDueDate)

    app.use('/api/task', router);
};