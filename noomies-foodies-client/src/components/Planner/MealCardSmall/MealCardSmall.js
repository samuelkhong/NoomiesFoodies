import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import './MealCardSmall.css'

const MealCardSmall = () => {
    return(
        <div className='meal-small-card'>
            <h3 className='meal-time-week'>Breakfast</h3>
            <img className="recipe-small-card" src="./images/planner-icons/sample-recipe.png" alt="meal"></img>
            <p className='small-card-meal-title'>High-Protein Scrambled Eggs with Cottage Cheese</p>
            <div className='calorie-wrapper'>
                <CalorieCounter></CalorieCounter>
            </div>
            <button className='options-btn' ><img src="./images/planner-icons/options-small-card.png" alt="options"></img></button>

        </div>

    ); 
};
export default MealCardSmall;