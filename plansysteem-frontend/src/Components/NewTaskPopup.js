import '../Css/NewTaskPopup.css'
import {CloseButton} from 'react-bootstrap'

function NewTaskPopup({onClick, submittask}) {
    let newTaskName = 'New Task'

    //When the button is clicked this method is trigerd and send the new task to the database
    function HandleSubmit(e){
        console.log("submit")
        HandleInput(document.getElementById('input').value)
        submittask(e, newTaskName)
        onClick()
    }

    //Checks whether the user has typed something and sets a default name if not
    function HandleInput(value){
        if(value.length >= 1){
            newTaskName = value
            return
        }

        newTaskName = 'New Task'
        return
    }

    return (
        <div className = "popupBody">
            <CloseButton onClick = {onClick} />
            <h5>New Task</h5>
            <lable>task name: </lable>
            <input type = 'text' id = 'input'/>
            <button type = 'submit' onClick = {event => HandleSubmit(event)}> Create new Task</button>
        </div>
    )
}

export default NewTaskPopup
