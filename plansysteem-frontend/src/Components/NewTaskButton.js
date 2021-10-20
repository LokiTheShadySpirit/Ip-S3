import '../Css/NewTaskButton.css';
import Button from 'react-bootstrap/Button'

function NewTaskButton({newtaskname = "Default Task Name"}) {
    return (
        <Button type = "submit" className = 'button'>
            <h3 className = 'buttontext'>+</h3>
        </Button>
    )
}

export default NewTaskButton
