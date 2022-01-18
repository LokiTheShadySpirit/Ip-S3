import { Variables } from "../Components/Variables";
import { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "../Components/Taskslist";
import NewTaskPopup from "../Components/NewTaskPopup";

import "../Css/TaskOverview.css";

function TaskOverview() {
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(true);

  const[updateList, setUpdateList] = useState(true)

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


 
  //posts a task to the database on submit of the new task form
  const postTask = (e, name) =>{
    e.preventDefault()
    setAlert(false)
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

  //gets the tasks from the database, unless a post request is happening 
  useEffect(() => {
    let mounted = true;
    
    if(tasks.length >= 1 && !alert){
      return;
    }

    if(updateList){
      getAllTasks()
        .then(alltasks => {
          if(mounted){
            setTasks(alltasks)
            setUpdateList(!updateList)
          }
        })
  
        return () => mounted = false
    }

    return

  });



  useEffect(() => {
  }, [showNewTaskPopup])


  return (
    <div>
      <TasksList Tasks={tasks} />
      <div className= "newTaskButton" onClick ={() => ShowNewTaskPopup()}> New Task</div>
      {showNewTaskPopup ? <NewTaskPopup onClick = {() => ShowNewTaskPopup()} submittask = {postTask}  />: null}
    </div>
  );
}

export default TaskOverview;
