import { useState } from 'react';
import './card.css'
import ViewMoreModal from '../ViewMoreModal/viewmore';


export default function ListCard ({color, children}) {

    const [openViewModal, setOpenViewModal] = useState(false)
    

    return (
        <div className="card-container">
            <div className='list-content'>
                <div className="list-color"  style={{backgroundColor: color}}></div>
                <div className="list-text">To Buy Later</div>
            </div>
            <div className='list-button'>
                <button onClick={() => setOpenViewModal(true)}>
                <img src="./images/list-images/pepicons-pop_dots-y.png" ></img>
                </button>
                {openViewModal && <ViewMoreModal />}
            </div> 
        </div>
      );
}
