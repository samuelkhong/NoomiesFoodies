import React from 'react';
import './Recipes.css'
import RecipeBtn from "./RecipeBtn/RecipeBtn"
import RecipeRow from './RecipeRow/RecipeRow';
import EmptyCard from './EmptyCard/EmptyCard';


const Recipe = ({breakfast, lunch, dinner, other, setShowBackBtn, setActiveComponent}) => {
    setShowBackBtn(false); // Hide the back button when Component1 is rendered

    const handleViewAllClick = () => {
        setShowBackBtn(true);
        setActiveComponent('RecipesAll');
    };

    const handleAddRecipe = () => {
        setShowBackBtn(true);
        setActiveComponent('CreateRecipe');
    }


    return(
        <div className='recipe-container'>
            <div className='recipe-header'>
                <div className='top-add-btn'>
                    <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                </div>
                
                <h1 className='recipe-title'>My Recipes</h1>
            </div>
            <div className='meal-time' >
                <div className='recipe-category-title'>
                    <p>Breakfast:</p>
                    <button className="breakfast-btn view-all" onClick={handleViewAllClick}>View All</button>
                </div>
                {breakfast ? (
                    <RecipeRow arrMeals={breakfast} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}

                {/* <RecipeRow arrMeals={breakfast}></RecipeRow> */}
            </div >
            <div className='meal-time' >
                <div className='recipe-category-title'>
                    <p>Lunch:</p>
                    <btn className="lunch-btn view-all">View All</btn>
                </div>
                {lunch ? (
                    <RecipeRow arrMeals={lunch} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
            <div className='meal-time' >
                <div className='recipe-category-title'>
                    <p>Dinner:</p>
                    <btn className="dinner-btn view-all">View All</btn>
                </div>
                {dinner ? (
                    <RecipeRow arrMeals={dinner} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
            <div className='meal-time' >
                <div className='recipe-category-title'>
                    <p>Snacks/Other:</p>
                    <btn className='other-btn view-all'>View All </btn>
                </div>
                {other ? (
                    <RecipeRow arrMeals={other} />
                ) : (
                    <div className="no-recipe-container">
                        <div className='empty-card-container'><EmptyCard/></div>
                        
                        <RecipeBtn imgUrl={'./images/recipes-icon/plus.png'} onClick={handleAddRecipe} content={'Add Recipe'} ></RecipeBtn>
                    </div>
                )}
            </div >
                
        </div>

    ); 
};
export default Recipe;