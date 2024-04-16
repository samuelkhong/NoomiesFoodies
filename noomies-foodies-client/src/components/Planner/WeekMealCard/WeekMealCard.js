import React from "react";
import DayRowMeals from "./DayRowMeals/DayRowMeals";
import './DayRowMeals.css';

const WeekMealCard = ({arrMealsWeek}) => {

    // arrNealsWeek will be an array of objects
    // each object will represent a day 
    // each object will have a weekday, date and array of meals

    arrMealsWeek = [
        {
            day: 'Monday',
            date: '2024-04-01',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Tuesday',
            date: '2024-04-02',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Wednesday',
            date: '2024-04-03',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Thursday',
            date: '2024-04-04',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Friday',
            date: '2024-04-05',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Saturday',
            date: '2024-04-06',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        },
        {
            day: 'Sunday',
            date: '2024-04-07',
            meals: ['Breakfast', 'Lunch', 'Dinner']
        }
    ];
    return (
    <div className="week-meals-container">
        <h1 className="week-container-heading">Meals</h1>
        { arrMealsWeek.map((meal) => (
            <DayRowMeals weekday={meal.day} date={meal.date} arrMeals={meal.meals}></DayRowMeals>
        ))};
    </div>
    );
};
export default WeekMealCard;