module.exports = app => {
    const task = require("../controllers/TaskController.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tasks
    router.get("/", task.findAll);
  
    // Retrieve all Tasks with given Due Date
    router.get("/published", task.findAllOnDueDate);
  
    // Retrieve a single Task with id
    router.get("/:id", task.findOne);
  
    // Update a Task with id
    router.put("/:id", task.update);

    app.use('/api/task', router);
};