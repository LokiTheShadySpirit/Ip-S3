import { Variables } from "../Components/Variables";
import { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "../Components/Taskslist";
import NewTaskButton from "../Components/NewTaskButton";
import NewTaskPopup from "../Components/NewTaskPopup";

function TaskOverview() {
  const [tasks, setTasks] = useState([]);
  const [getData, setGetData] = useState(true);

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
      setGetData(true)
    })
  }

  async function WaitForTasks(){
    if(getData){
      setTasks(await getAllTasks())
        setGetData(false)
        console.log(`get data set to false`)
    }
    return
  }

  function ToggleNewTaskPopup(){
    setShowNewTaskPopup(!showNewTaskPopup)
  }

  useEffect(() => {
    console.log(`getdata: ${getData}`)
    WaitForTasks()
  },[getData]);

  useEffect(() =>{
  },[showNewTaskPopup])

  return (
    <div>
      {tasks.lenght >= 1 ? <TasksList Tasks={tasks} /> : null}
      {/* <form onSubmit = {postTask}>
        <label>
          <p>New Task</p>
          <input type = 'text' onChange={event => setNewTaskName(event.target.value)} value = {newTaskName} />
        </label>
      </form> */}

      <NewTaskButton onClick = {() => ToggleNewTaskPopup()} />
      {showNewTaskPopup ?<NewTaskPopup />: null}
    </div>
  );
}

export default TaskOverview;
