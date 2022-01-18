import TaskDetailsPopup from "./TaskDetailsPopup";

import '../Css/Taskslist.css';

import { useState, useEffect } from "react";

import axios from "axios";
import { Variables } from "./Variables";

function TasksList({ Tasks }) {
  const [showTaskDetailPopup, setShowTaskDetailPopup] = useState(false);
  const [detailedTask, setDetailedTask] = useState(undefined);

  function HoverLeave(taskId) {
    document.getElementById("editicon" + taskId).style.display = "none"
  }

  function HoverEnter(taskId) {
    document.getElementById("editicon" + taskId).style.display = "inline"
  }

  async function GetDueDate(taskid){
    if(taskid !== undefined){
      const apirequest =  await axios.get(Variables.GetDueDateUrl + taskid)
      const data = apirequest.data
      return data
    }

    
    return "not found"
  }

  function RetrieveDueDate(taskid){
    const response = GetDueDate(taskid)
    console.log(response)
    return response
  }

  return (
    <div className="background">
      <div className="page">
      <table className="table">
        <thead>
            <tr id="trnoclick">
              <th style={{ width: "45%" }}>Task</th>
              <th style={{ width: "25%" }}>DueDate</th>
            </tr>
        </thead>
        <tbody>
          {
            Tasks.map((task) => (
              <tr onMouseEnter={() => HoverEnter(task.taskId)} onMouseLeave={() => HoverLeave(task.taskId)} key={task.taskId}>
                <td>{task.taskName}</td>
                {console.log(RetrieveDueDate(task.taskId))}
                <td>1</td>
                <td>
                  <button className="btn-dark" style={{ display: "none", borderRadius: '5px' }} id={"editicon" + task.taskId}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    Set Due Date
                  </button>
                </td>
                {console.log(task)}
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default TasksList;
