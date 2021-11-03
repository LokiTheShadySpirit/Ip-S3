import '../Css/NewTaskPopup.css'

function NewTaskPopup({handleClose}) {
    return (
        <div className = 'popupbox'>
            <div className = 'box'>
                <span className = 'closeicon' onClick = {handleClose} >x</span>  
            </div>    
        </div>
    )
}

export default NewTaskPopup
