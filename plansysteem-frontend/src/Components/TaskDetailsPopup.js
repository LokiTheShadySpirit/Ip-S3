import '../Css/DetailPopup.css'

function TaskDetailsPopup({task, onClick}) {
    return (
        <div className = 'detailpopup' onClick = {onClick} >
            <h5>{task.taskName}</h5>
        </div>
    )
}

export default TaskDetailsPopup
