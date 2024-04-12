import React, { useState, useEffect } from 'react';
import DayWeekBtn from "./DayWeekBtn/DayWeekBtn";
import MealsTodayAll from "./MealsTodayAll/MealsTodayAll";
import DayMealCard from './DayMealCard/DayMealCard';
import './Planner.css'

const Planner = () => {
    const [isDay, setIsDay] = useState(true); 
    // listens to isDay. If changes, changes the component
    useEffect(() => {
        //todo send a fetch request from the api getting all meals for today or week
        // feed that information back to be rendered


    }, [isDay]) //dependency array. Use Effect is called whenever isDay changes



    return (
        <div className='Planner-container'>
            <DayWeekBtn isDay={isDay} setIsDay={setIsDay}></DayWeekBtn>
            {/* renders componenet based on boolean isDay */}
            {/* temp placeholder daymealcard. Will eventually render MealsWeekAll */}
            {isDay ? <MealsTodayAll></MealsTodayAll> : <DayMealCard></DayMealCard>}
        </div>
    );
};
export default Planner;