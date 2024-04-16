
function ViewMoreModal (onDeleteClick) {
    return (  
        <div className="modal-container">
            <div className="modal-content">
                <span className="modal-text">Edit this list</span>
                <hr className="horizontal-line"/>
                <button onClick={onDeleteClick} className="delete-button">Delete</button>
            </div> 
        </div>
    );
}

export default ViewMoreModal;