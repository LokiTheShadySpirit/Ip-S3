const db = require("../models/PlanningApi")
const Task = db.task
const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Task.findAll() //{ where: condition }
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Planning."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Task.findByPk(id)
    .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Task with id=${id}.`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Task with id=" + id
    });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Task.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Task with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Error updating Task with id=" + id
        });
    });
};

exports.findAllOnDueDate = (req, res) =>{
    const Date = req.params.DueDate;

    Task.findAll({where: {DueDate: Date}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message: "Some error occurred while retrieving Tasks."
            });
        });
}

exports.findDueDate = (req, res ) =>{
  const id = req.params.id
  console.log(id)

  Task.findAll({
      where: {TaskId: id},
      attributes: ['TaskId', 'DueDate']
  })
  .then(data => {
    if (data) {
      console.log(data)
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find Task with id=${id}.`
      });
    }
})
.catch(err => {
    res.status(500).send({
      message: "Error retrieving Task with id=" + id
  });
});
}
