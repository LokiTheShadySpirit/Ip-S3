import { Variables } from "../Components/Variables";
import { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "../Components/Taskslist";

function TaskOverview(){
    const [tasks, setTasks] = useState([])

    async function getAllTasks(){
        const apirequest = await axios.get(Variables.APiUrl)
        return apirequest.data;
    }

     async function getTasks(){
         setTasks(await getAllTasks())
     }

    useEffect(() => {
        getTasks()
    }, )

    return(
        <div>
            <TasksList Tasks = {tasks} />
        </div>
    )
}

export default TaskOverview