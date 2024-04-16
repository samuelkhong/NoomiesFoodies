import React from "react";
import MealCardSmall from "../../MealCardSmall/MealCardSmall";
import CalorieCounter from "../../CalorieCounter/CalorieCounter";
import TotalCookingTime from "../../TotalCookingTime/TotalCookingTime"
import './DayRowMeals.css';

const DayRowMeals = ({weekday, date, arrMeals}) => {
    const dummyMeals = [
        {
            mealTitle: "High-Protein Scrambled Eggs with Cottage Cheese",
            mealTime: "Breakfast",
            calories: 350,
            time: 40
        },
        {
            mealTitle: "Grilled Chicken Salad with Avocado",
            mealTime: "Lunch",
            calories: 500,
            time: 30
        },
        {
            mealTitle: "Spaghetti Squash with Turkey Meatballs",
            mealTime: "Dinner",
            calories: 450,
            time: 10
        }
    ];
    
    arrMeals = dummyMeals;
    weekday="Wednesday";
    date="7/7/1997"

    const caloriesPerDay = arrMeals.reduce((total, meal) => total + meal.calories, 0);
    const timePerDay = (arrMeals.reduce((total, meal) => total + meal.time, 0)) /60;
    let roundedTime = Math.floor(timePerDay);
    if ((timePerDay - roundedTime) > .05) {
        roundedTime += .1;
    }

    return(
        <div className="row-meal-info-container">
            <div className="day-meal-info">
                <div className="date">{weekday}: {date}</div>
                <div className="calorie-container"><CalorieCounter calorieCount={caloriesPerDay}></CalorieCounter></div>
                <div className="time-container"><TotalCookingTime time={(roundedTime).toFixed(1)}></TotalCookingTime></div>
            </div>

            <div className="meal-container">
                {arrMeals.map((meal) => (
                    <MealCardSmall mealTitle={meal.mealTitle} mealTime={meal.mealTime} calories={meal.calories}></MealCardSmall>
                 ))}


            </div>

        </div>
        
        
    );
};
export default DayRowMeals;
