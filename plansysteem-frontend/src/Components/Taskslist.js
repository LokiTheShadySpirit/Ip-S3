import TaskDetailsPopup from "./TaskDetailsPopup";

import '../Css/Taskslist.css';

import { useState, useEffect } from "react";

function TasksList({ Tasks }) {
  const [showTaskDetailPopup, setShowTaskDetailPopup] = useState(false);
  const [detailedTask, setDetailedTask] = useState(undefined);

  // function ShowTaskDetailPopup(selectedtask){
  //   console.log(selectedtask)
  //   if(selectedtask !== undefined){
  //     setDetailedTask(selectedtask)
  //     setShowTaskDetailPopup(true)
  //     return
  //   }
  //   setShowTaskDetailPopup(false)
  //   return
  // }

  function HoverLeave(taskId) {
    document.getElementById("editicon" + taskId).style.display = "none"
  }

  function HoverEnter(taskId) {
    document.getElementById("editicon" + taskId).style.display = "inline"
  }


  
  return (
    // <div className="taskCardList">
    //   {Tasks.map((Task) => (
    //     <div className="taskCardItem" key = {Task.taskId} onClick = {() => ShowTaskDetailPopup(Task)}>
    //       <TaskCard key={Task.taskId} task={Task} />
    //     </div>
    //   ))}
    // </div>

    <div className="background">
      <div className="page">
        {/* <div style={{ margin: "1%" }} className="Searchbar">
            <a style={{ fontSize: "25px" }}>🔎︎</a><input className="searchField" data-testid="searchfieldid" type="text" onChange={FilterComponentsOnChange}></input>
              {notFound ? <label className="NoResultsLabel">No results found</label> : null}
        </div> */}
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
              <tr onMouseEnter={() => HoverEnter(task.TaskId)} onMouseLeave={() => HoverLeave(task.TaskId)} key={task.TaskId}>
                <td>{task.taskName}</td>
                <td>{task.dueDate != "0001-01-01T00:00:00" ? task.dueDate : "No Date Set"}</td>
                <td>
                  <button className="btn-dark" style={{ display: "none", borderRadius: '5px' }} id={"editicon" + task.TaskId}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    Set Due Date
                  </button>
                </td>
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
