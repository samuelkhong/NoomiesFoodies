import React from "react";
import MealCardSmall from "../../MealCardSmall/MealCardSmall";
import CalorieCounter from "../../CalorieCounter/CalorieCounter";
import TotalCookingTime from "../../TotalCookingTime/TotalCookingTime"
import './DayRowMeals.css';

const DayRowMeals = ({weekday, date, arrMeals}) => {
    return(
        <div className="row-meal-info-container">
            <div className="day-meal-info">
                <div className="date">{weekday}: {date}</div>
                <div className="calorie-container"><CalorieCounter></CalorieCounter></div>
                <div className="time-container"><TotalCookingTime></TotalCookingTime></div>
            </div>

            <div className="meal-container">
                {arrMeals.map((meal) => (
                    <MealCardSmall></MealCardSmall>
                 ))}


            </div>

        </div>
        
        
    );
};
export default DayRowMeals;
