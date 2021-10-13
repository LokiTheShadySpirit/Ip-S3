import "./TaskCard.css";

function TaskCard({ task }) {
  return (
    <div className="card">
      <h3 className="tasktitle">{task.TaskName}</h3>
    </div>
  );
}

export default TaskCard;
