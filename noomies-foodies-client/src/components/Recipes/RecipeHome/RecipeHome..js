import React, { useState } from "react";
import Recipe from "../Recipes";
import RecipesAll from "../RecipesAll/RecipesAll";
import BackBtn from "../BackBtn/BackBtn";
import CreateRecipe from "../CreateRecipe/CreateRecipe";
import './RecipeHome.css'

const RecipeHome = () => {
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Recipe');
    const [mealTime, setMealTime] = useState('Breakfast');

 

    


    const arrMeals = [
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 3,
          "mealTitle": "Vegetable Lasagna",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 4,
          "mealTitle": "Beef Tacos",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 5,
          "mealTitle": "Salmon with Roasted Vegetables",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        
        {
          "id": 6,
          "mealTitle": "Mushroom Risotto",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 7,
          "mealTitle": "Grilled Lemon Herb Chicken",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 8,
          "mealTitle": "Vegetarian Pad Thai",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 9,
          "mealTitle": "Quinoa Salad with Chickpeas and Avocado",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 10,
          "mealTitle": "Pesto Pasta with Cherry Tomatoes",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        
        {
          "id": 11,
          "mealTitle": "Beef and Broccoli Stir-Fry",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 12,
          "mealTitle": "Shrimp Scampi",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 13,
          "mealTitle": "Teriyaki Salmon with Steamed Rice",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 14,
          "mealTitle": "Caprese Salad with Balsamic Glaze",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        },
        {
          "id": 15,
          "mealTitle": "Spinach and Feta Stuffed Chicken Breast",
          "imgUrl": "./images/planner-icons/sample-recipe.png"
        }
      ]
    
      const arrMealsSmall = [
        {
          id: 1,
          mealTitle: "Spaghetti Carbonara",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 2,
          mealTitle: "Chicken Stir-Fry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
        {
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        }
      ];
      const food =arrMeals;

      // instantiate array of meal objects as a state
      const [breakfast, setBreakfast] = useState([]);
      const [lunch, setLunch] = useState([]);
      const [dinner, setDinner] = useState([]);
      const [other, setOther] = useState([]);

      // Callback functions to update state in ParentComponent
      const updateBreakfast = (newBreakfast) => {
        setBreakfast(newBreakfast);
      };

      const updateLunch = (newLunch) => {
        setLunch(newLunch);
      };

      const updateDinner = (newDinner) => {
        setDinner(newDinner);
      };

      const updateOther = (newOther) => {
        setOther(newOther);
      };

    

    return (
        <div className="recipe-viewport">
            {/* {showBackBtn ? <BackBtn onClick={backBtnTest} /> : ''} */}

            {activeComponent === 'Recipe' && (
                <Recipe setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} setMealTime={setMealTime} />
            )}
            {activeComponent === 'RecipesAll' && (
                <RecipesAll food={food} mealTime={mealTime} setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} />
            )}
            {activeComponent === 'CreateRecipe' && (
              <CreateRecipe setBreakfast={updateBreakfast} breakfast={breakfast} setLunch={updateLunch} lunch={lunch} setDinner={updateDinner} dinner={dinner} setOther={updateOther} other={other} setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} ></CreateRecipe>
            )}
        </div>
    );
};

export default RecipeHome;
