import './viewmore.css'

function ViewMoreModal ({onDeleteClick, closeModal}) {
    return (
          
        <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>
                <img src="./images/list-images/view-close.png"></img>
            </button>
            <div className="modal-content">
                <div className="modal-text">Edit this list</div>
                <div><hr className="horizontal-line"/></div>
                <button onClick={onDeleteClick} className="delete-button">Delete</button>
            </div> 
        </div>
        
    );
}

export default ViewMoreModal;