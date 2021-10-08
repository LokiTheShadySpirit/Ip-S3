function TasksList({Tasks}){
    return(
        <div>
            {Tasks.map((task) => (
                <h3 key = {task.TaskId}>{task.TaskName}</h3>
            ))}
        </div>
    )
}

export default TasksList