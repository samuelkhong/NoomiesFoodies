import React, { useState } from "react";
import Recipe from "../Recipes";
import RecipesAll from "../RecipesAll/RecipesAll";
import BackBtn from "../BackBtn/BackBtn";

const RecipeHome = () => {
    const [showBackBtn, setShowBackBtn] = useState(false);
    const [activeComponent, setActiveComponent] = useState('Recipe');

    const handleBackBtnClick = () => {
        setShowBackBtn(false);
        setActiveComponent('Recipe');
    };

    const backBtnTest = () => {
        console.log('hello world');
    }

    


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
          id: 3,
          mealTitle: "Vegetable Curry",
          imgUrl: "./images/planner-icons/sample-recipe.png"
        },
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
        },
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
        },
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
      const mealTime  = 'breakf'
    

    return (
        <div>
            {/* {showBackBtn ? <BackBtn onClick={backBtnTest} /> : ''} */}

            {activeComponent === 'Recipe' && (
                <Recipe setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} />
            )}
            {activeComponent === 'RecipesAll' && (
                <RecipesAll food={food} mealTime={mealTime} setShowBackBtn={setShowBackBtn} setActiveComponent={setActiveComponent} />
            )}
        </div>
    );
};

export default RecipeHome;
