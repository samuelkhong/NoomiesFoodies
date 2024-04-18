import "./button.css"

export default function Button({imageUrl, onButtonClick, buttonName}) {
    
    return (  
        <button onClick={onButtonClick} className="button-style">
            <span>
                <img src={imageUrl} alt="button icon" className="button-image"></img>
                <span className="button-text">{buttonName}</span>
            </span>
        </button>
    );
}

