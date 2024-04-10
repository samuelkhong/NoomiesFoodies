import React, { useState } from 'react';


const DayWeekBtn = () => {

    // intialize the current state holding variables
    const [isDay, setIsDay] = useState(true); 
    const [isWeek, setIsWeek] = useState(false);

    // sets the day state
    const setDayView = () => {
        setIsDay(True);
        setIsWeek(False);
    }

    //set the view to week
    const setWeekView = () => {
        setIsDay(False);
        setIsWeek(True);
    }

  // returns two buttons. day btn when clicked sets  isDay to true and is week to false. 
  // sets today btn to active state. 
    return (
        <div className="day-week-toggle">
            <button className={`day ${isDay ? 'active' : ''}`} onClick={setDayView}></button>
            <button className={`day ${isWeek ? 'active' : ''}`} onClick={setWeekView}></button>
        </div>
    );
}
export default DayWeekBtn;