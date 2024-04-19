import './viewmore.css'

function ViewMoreModal ({onDeleteClick, onEditClick, closeModal}) {
    return (
          
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>
                <img src="./images/list-images/view-close.png"></img>
            </button>
            <div className="modal-content">
                <button  className="modal-text" onClick={onEditClick} >Edit this list</button>
                <div><hr className="horizontal-line"/></div>
                <button  className="delete-button" onClick={onDeleteClick} >Delete</button>
            </div> 
        </div>
        
    );
}

export default ViewMoreModal;