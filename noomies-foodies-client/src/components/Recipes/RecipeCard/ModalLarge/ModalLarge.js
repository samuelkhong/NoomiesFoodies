import Popup from 'reactjs-popup'
import './ModalLarge.css'

function ModalLarge ({open, nested, onClose, children}) {
    
    
    return (   
    <div className='modal-large'>
        <Popup
        open={open}
        modal
        closeOnDocumentClick
        onClose={onClose}
        nested={nested}
        className='modal'
    >
        
            <div className='children'>
            <button className="close-modal" onClick={onClose}>
                <img src="./images/list-images/close-icon.png"></img>
            </button>
            {children}
            </div>
        
        
        </Popup>
        
    </div>
    
    
    
    );
}

export default ModalLarge