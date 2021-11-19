import '../Css/NewTaskPopup.css'

function NewTaskPopup({cancle}) {
    return (
        <div className = "popupBody" onClick = {() => cancle}>
            <h5>New Task</h5>
            <lable>task name: </lable>
            <input type = 'text' />
        </div>
    )
}

export default NewTaskPopup
