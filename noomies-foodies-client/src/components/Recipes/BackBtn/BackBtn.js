import React from "react";
import './BackBtn.css'
// prop is onclick function from parent element
const BackBtn = ({ onBackButtonClick }) => {
    return (
        <button className="back-btn">
            <img className="back-img" src="./images/recipes-icon/back-button.png" alt="back"></img>
        </button>
    )
}
export default BackBtn;