import '../Css/DetailPopup.css'

function TaskDetailsPopup({task, onClick}) {
    return (
        <div className = 'detailpopup' onClick = {onClick} >
            <h5>{task.taskName}</h5>
            <p>{task.dueDate}</p>
        </div>
    )
}

export default TaskDetailsPopup
