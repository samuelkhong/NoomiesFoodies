import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import  './DayMealCard.css';

//Todo update with meal card with correct meal object properties later
const DayMealCard = ({mealTime, mealTitle, prepTime, cookTime, calories}) => {

    const dummyMeal = "High Protein Scrambled Eggs with Cottage Cheese";
    const dummyMealTime = "breakfast";
    const dummyPrep = 10;
    const dummyCook = 10;
    const dummyCal = 200;

    //todo
    // when user clicks options btn, will open up options page
    const displayCardOptions = () => {

    };


    return (
        <div className='day-card'>
            <div className='card-left'>
                <p className='meal-time'>{mealTime}</p>
                <img className='recipe-img' src="./images/planner-icons/sample-recipe.png"></img>
                
            </div>
            <div className='card-right'>
                <div className='card-right-top'>
                    <p className='meal-name'>{mealTitle}</p>

                </div>
                <div className='card-right-bottom'>
                    <div className='card-info'>Prep Time: {prepTime} minutes</div>
                    <div className='card-info'><CalorieCounter calorieCount={calories}></CalorieCounter></div>
                    <div className='card-info'>Cook Time: {cookTime} minutes</div>
                </div>
                
                
            </div>
            <div className='card-right-background'>
                    <button className='options-btn' onClick={displayCardOptions}><img src="./images/planner-icons/options.png" alt="options"></img></button>
            </div>


        </div>

    );
};
export default DayMealCard;