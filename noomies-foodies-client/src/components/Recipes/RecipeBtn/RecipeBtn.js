import React from 'react'; // Import React
import "./RecipeBtn.css"

const RecipeBtn = ({ btnUrl, imgUrl, content}) => {
    return (
        <a className="btn-container" href={btnUrl} >
            <img className="btn-pic" src={imgUrl}></img>
            <p className='btn-text'>{content}</p>
        </a>
    );

};

export default RecipeBtn;