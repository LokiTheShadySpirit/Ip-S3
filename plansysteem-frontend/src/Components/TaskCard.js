import "../Css/TaskCard.css";

function TaskCard({ task }) {
  return (
    <div className="card">
      <h3 className="tasktitle">{task.taskName}</h3>
    </div>
  );
}

export default TaskCard;
