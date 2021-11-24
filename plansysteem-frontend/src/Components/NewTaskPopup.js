import '../Css/NewTaskPopup.css'
import {CloseButton} from 'react-bootstrap'

function NewTaskPopup({onClick}) {
    return (
        <div className = "popupBody">
            <CloseButton onClick = {onClick} />
            <h5>New Task</h5>
            <lable>task name: </lable>
            <input type = 'text' />
        </div>
    )
}

export default NewTaskPopup
