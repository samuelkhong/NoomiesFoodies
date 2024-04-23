import React, { useState, useEffect } from 'react';
import DayWeekBtn from "./DayWeekBtn/DayWeekBtn";
import MealsTodayAll from "./MealsTodayAll/MealsTodayAll";
import DayMealCard from './DayMealCard/DayMealCard';
import WeekMealCard from './WeekMealCard/WeekMealCard';
import './Planner.css'

const Planner = () => {
    //todo add async functions to have get request for data. 
    const arrMealsWeek = [
        {
            weekday: "Tuesday",
            date: "4/23/2024",
            meals: [
                {
                    id: 1,
                    mealTitle: "Oatmeal with Berries",
                    mealTime: "Breakfast",
                    calories: 300,
                    time: 20,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 2,
                    mealTitle: "Grilled Salmon with Quinoa",
                    mealTime: "Lunch",
                    calories: 550,
                    time: 25,
                    prepTime: 15,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 3,
                    mealTitle: "Vegetable Stir-Fry with Tofu",
                    mealTime: "Dinner",
                    calories: 400,
                    time: 200,
                    prepTime: 30,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Wednesday",
            date: "4/24/2024",
            meals: [
                {
                    id: 4,
                    mealTitle: "Scrambled Eggs with Avocado",
                    mealTime: "Breakfast",
                    calories: 400,
                    time: 15,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 5,
                    mealTitle: "Turkey Sandwich with Salad",
                    mealTime: "Lunch",
                    calories: 450,
                    time: 20,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 6,
                    mealTitle: "Spaghetti with Marinara Sauce",
                    mealTime: "Dinner",
                    calories: 600,
                    time: 30,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Thursday",
            date: "4/25/2024",
            meals: [
                {
                    id: 7,
                    mealTitle: "Greek Yogurt Parfait",
                    mealTime: "Breakfast",
                    calories: 250,
                    time: 10,
                    prepTime: 5,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 8,
                    mealTitle: "Chicken Caesar Salad",
                    mealTime: "Lunch",
                    calories: 400,
                    time: 20,
                    prepTime: 15,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 9,
                    mealTitle: "Beef Tacos",
                    mealTime: "Dinner",
                    calories: 500,
                    time: 30,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Friday",
            date: "4/26/2024",
            meals: [
                {
                    id: 10,
                    mealTitle: "Banana Pancakes",
                    mealTime: "Breakfast",
                    calories: 350,
                    time: 20,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 11,
                    mealTitle: "Vegetarian Sushi Rolls",
                    mealTime: "Lunch",
                    calories: 300,
                    time: 25,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 12,
                    mealTitle: "Grilled Chicken with Roasted Vegetables",
                    mealTime: "Dinner",
                    calories: 450,
                    time: 35,
                    prepTime: 25,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Saturday",
            date: "4/27/2024",
            meals: [
                {
                    id: 13,
                    mealTitle: "Avocado Toast with Poached Eggs",
                    mealTime: "Breakfast",
                    calories: 400,
                    time: 20,
                    prepTime: 15,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 14,
                    mealTitle: "Quinoa Salad with Chickpeas",
                    mealTime: "Lunch",
                    calories: 350,
                    time: 15,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 15,
                    mealTitle: "Grilled Steak with Baked Potatoes",
                    mealTime: "Dinner",
                    calories: 600,
                    time: 40,
                    prepTime: 25,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Sunday",
            date: "4/28/2024",
            meals: [
                {
                    id: 16,
                    mealTitle: "Blueberry Pancakes",
                    mealTime: "Breakfast",
                    calories: 450,
                    time: 25,
                    prepTime: 15,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 17,
                    mealTitle: "Caprese Sandwich with Tomato Soup",
                    mealTime: "Lunch",
                    calories: 500,
                    time: 30,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 18,
                    mealTitle: "Baked Salmon with Asparagus",
                    mealTime: "Dinner",
                    calories: 550,
                    time: 35,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        },
        {
            weekday: "Monday",
            date: "4/29/2024",
            meals: [
                {
                    id: 19,
                    mealTitle: "Fruit Smoothie Bowl",
                    mealTime: "Breakfast",
                    calories: 300,
                    time: 15,
                    prepTime: 10,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 20,
                    mealTitle: "Mediterranean Salad with Hummus",
                    mealTime: "Lunch",
                    calories: 400,
                    time: 20,
                    prepTime: 15,
                    imgUrl: "./images/planner-icons/sample-recipe.png"
                },
                {
                    id: 21,
                    mealTitle: "Teriyaki Chicken with Rice",
                    mealTime: "Dinner",
                    calories: 500,
                    time: 30,
                    prepTime: 20,
                    imgUrl: "./images/planner-icons/sample-recipe.png"   
                }
            ]
        }
    ];
    

    const meals =  [
        {
            mealTitle: "Oatmeal with Berries",
            mealTime: "Breakfast",
            calories: 300,
            time: 20,
            prepTime: 30,
            imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
            mealTitle: "Grilled Salmon with Quinoa",
            mealTime: "Lunch",
            calories: 550,
            time: 25,
            prepTime: 30,
            imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
            mealTitle: "Vegetable Stir-Fry with Tofu",
            mealTime: "Dinner",
            calories: 400,
            time: 200,
            prepTime: 15,
            imgUrl: "./images/planner-icons/sample-recipe.png"   
        }
    ]






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
            {isDay ? <MealsTodayAll arrMeals={meals}></MealsTodayAll> : <WeekMealCard arrMealsWeek={arrMealsWeek}></WeekMealCard>}
        </div>
    );
};
export default Planner;