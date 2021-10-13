import TaskCard from "./TaskCard";

import './Taskslist.css';

function TasksList({ Tasks }) {
  return (
    <div className="row">
      {Tasks.map((task) => (
        <div className="column">
          <TaskCard key={task.TaskId} task={task} />
        </div>
      ))}
    </div>
  );
}

export default TasksList;
