import React, { useState } from 'react';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import TotalCookingTime from '../TotalCookingTime/TotalCookingTime';
import DayMealCard from '../DayMealCard/DayMealCard';
import './MealsTodayAll.css'

const MealsTodayAll = () => {


    const dummyMeal = "High Protein Scrambled Eggs with Cottage Cheese";
    const dummyMealTime = "breakfast";
    const dummyPrep = 10;
    const dummyCook = 10;
    const dummyCal = 200;

    return (
        <div className='meals-today-all'>
            <div className='day-meal-summary'>
                <h1>Meals</h1>
                <div className='calorie-summary'>
                    <CalorieCounter></CalorieCounter>
                </div>
                <div className='time-summary'>
                    <TotalCookingTime></TotalCookingTime>
                </div>
            </div>
            <div className='day-meal-container'>
                <div className='day-meal-item'><DayMealCard></DayMealCard></div>
                <div className='day-meal-item'><DayMealCard></DayMealCard></div>
                <div className='day-meal-item'><DayMealCard></DayMealCard></div>
            </div>
        </div>
    );
};
export default MealsTodayAll;
