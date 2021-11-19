import TaskCard from "./TaskCard";
import TaskDetailsPopup from "./TaskDetailsPopup";

import '../Css/Taskslist.css';

import { useState, useEffect } from "react";

function TasksList({ Tasks }) {
  const [showTaskDetailPopup, setShowTaskDetailPopup] = useState(false);
  const [detailedTask, setDetailedTask] = useState(undefined);

  function ShowTaskDetailPopup(selectedtask){
    console.log(selectedtask)
    if(selectedtask != undefined){
      setDetailedTask(selectedtask)
      setShowTaskDetailPopup(true)
      return
    }
    setShowTaskDetailPopup(false)
    return
  }

  useEffect(() => {
  }, [showTaskDetailPopup])

  
  return (
    <div className="taskCardList">
      {Tasks.map((Task) => (
        <div className="taskCardItem" key = {Task.taskId} onClick = {() => ShowTaskDetailPopup(Task)}>
          <TaskCard key={Task.taskId} task={Task} />
        </div>
      ))}
      {showTaskDetailPopup ? <TaskDetailsPopup task = {detailedTask} onClick = {() => ShowTaskDetailPopup()}/> : null}
    </div>
  );
}

export default TasksList;
