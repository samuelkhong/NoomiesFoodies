import React from 'react'; // Import React
import "./RecipeBtn.css"

const RecipeBtn = ({ onClick, imgUrl, content}) => {
    return (
        <button className="btn-container" href={btnUrl} >
            <img className="btn-pic" src={imgUrl}></img>
            <p className='btn-text'>{content}</p>
        </button>
    );

};

export default RecipeBtn;