import React from "react";
import DayRowMeals from "./DayRowMeals/DayRowMeals";
import './DayRowMeals.css';

const WeekMealCard = () => {

    const arrMealsWeek =[1, 2, 3, 4, 5, 6, 7];
    return (
    <div className="week-meals-container">
        <h1 className="week-container-heading">Meals</h1>
        { arrMealsWeek.map((meal) => (
            <DayRowMeals weekday={'Monday'} date={'4/7/23'} arrMeals={[1, 2, 3]}></DayRowMeals>
        ))};
    </div>
    );
};
export default WeekMealCard;