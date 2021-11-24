import { Variables } from "../Components/Variables";
import { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "../Components/Taskslist";
import NewTaskPopup from "../Components/NewTaskPopup";

import "../Css/TaskOverview.css";

function TaskOverview() {
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(true);

  const [newTaskName , setNewTaskName] = useState("");
  const [showNewTaskPopup, setShowNewTaskPopup] = useState(false)

  const [detailedTask, setDetailedTask] = useState([]);

  async function getAllTasks() {
    const apirequest = await axios.get(Variables.TaskOverviewGetTasksUrl);
    return apirequest.data;
  }

  async function getTaskDetails({taskid}){
    const apirequest = await axios.get(Variables.TaskOverviewGetTaskDetails);
    return apirequest.data;
  }

  const postTask = (e) =>{
    e.preventDefault();
    let name = "Default Task Name"

    if (newTaskName !== ""){
      name = newTaskName
    }

    axios.post(Variables.TaskOverviewCreateTaskUrl + name)
    .then(() => {
      setNewTaskName("")
      ToggleNewTaskPopup()
      setAlert(true)
    })
  }

  function ShowNewTaskPopup(){
    ToggleNewTaskPopup()
  }

  function ToggleNewTaskPopup(){
    setShowNewTaskPopup(!showNewTaskPopup)
  }

  useEffect(() => {
    let mounted = true;
    
    if(tasks.length >= 1 && !alert){
      return;
    }

    getAllTasks()
      .then(alltasks => {
        if(mounted){
          setTasks(alltasks)
        }
      })

      return () => mounted = false
  });

  useEffect(() => {
  }, [showNewTaskPopup])


  return (
    <div>
      <TasksList Tasks={tasks} />
      {/* <form onSubmit = {postTask}>
        <label>
          <p>New Task</p>
          <input type = 'text' onChange={event => setNewTaskName(event.target.value)} value = {newTaskName} />
        </label>
      </form> */}
      <div className= "newTaskButton" onClick ={() => ShowNewTaskPopup()}> New Task</div>
      {showNewTaskPopup ? <NewTaskPopup onClick = {() => ShowNewTaskPopup()}  />: null}
    </div>
  );
}

export default TaskOverview;
