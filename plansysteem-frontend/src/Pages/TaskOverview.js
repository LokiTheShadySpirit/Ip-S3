import { Variables } from "../Components/Variables";
import { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "../Components/Taskslist";
import NewTaskButton from "../Components/NewTaskButton";

function TaskOverview() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName , setNewTaskName] = useState("");
  const [alert, setAlert] = useState(false);

  async function getAllTasks() {
    const apirequest = await axios.get(Variables.TaskOverviewGetTasksUrl);
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
      setAlert(true)
    })
  }

  useEffect(() => {
    let mounted = true;

    if(tasks.length && !alert){
      return;
    }

    getAllTasks()
      .then(alltasks => {
        if(mounted) {
          setTasks(alltasks)
        }
      })
      return () => mounted = false
  });

  return (
    <div>
      <TasksList Tasks={tasks} />
      <form onSubmit = {postTask}>
        <label>
          <p>New Task</p>
          <input type = 'text' onChange={event => setNewTaskName(event.target.value)} value = {newTaskName} />
        </label>
        <NewTaskButton newtaskname = {newTaskName}/>
      </form>
    </div>
  );
}

export default TaskOverview;
