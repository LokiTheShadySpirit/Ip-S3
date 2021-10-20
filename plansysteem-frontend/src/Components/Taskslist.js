import TaskCard from "./TaskCard";
import '../Css/Taskslist.css';

function TasksList({ Tasks }) {
  return (
    <div className="row">
      {Tasks.map((task) => (
        <div className="column">
          <TaskCard key={task.taskId} task={task} />
        </div>
      ))}
    </div>
  );
}

export default TasksList;
