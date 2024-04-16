import './card.css'

export default function ListCard ({color, onListClick}) {
    
    return (
        <div className="card-container">
            <div className='list-content'>
                <div className="list-color"  style={{backgroundColor: color}}></div>
                <div className="list-text">To Buy Later</div>
            </div>
            <div className='list-button'>
                <button onClick={onListClick}>
                <img src="./images/list-images/pepicons-pop_dots-y.png" ></img>
                </button>
            </div>
        </div>
      );
}
