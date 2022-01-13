const { task } = require("./PlanningApi");

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      TaskId:{
          type: Sequelize.INTEGER
        },
      TaskName:{
          type: Sequelize.STRING
        },
      DueDate:{
        type: Sequelize.DATE
      }
    },{
        sequelize,
        modelName: 'Task',
        tableName: 'task',
        timestamps: false,

    });

    Task.removeAttribute('id')
  
    return Task;
};