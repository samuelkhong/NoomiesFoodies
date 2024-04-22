
import React, { useState } from 'react';
import BackBtn from '../BackBtn/BackBtn';
import './CreateRecipe.css'


function CreateRecipe({setShowBackBtn,setActiveComponent}) {
// test setShow

    // stores states
  const [recipeName, setRecipeName] = useState('');

  const [imageFile, setImageFile] = useState(null);

  const [mealTimes, setMealTimes] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
    dessert: false,
  });

  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [yields, setYields] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleMealTimeChange = (event) => {
    const { name, checked } = event.target;
    setMealTimes({
      ...mealTimes,
      [name]: checked,
    });
  };

  const handlePrepTimeChange = (event) => {
    setPrepTime(event.target.value);
  };

  const handleCookTimeChange = (event) => {
    setCookTime(event.target.value);
  };

  const handleYieldsChange = (event) => {
    setYields(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    // For example, sending data to the server
    console.log('Recipe Name:', recipeName);
    console.log('Image File:', imageFile);
    console.log('Meal Times:', mealTimes);
    console.log('Prep Time:', prepTime);
    console.log('Cook Time:', cookTime);
    console.log('Yields:', yields);
    console.log('Description:', description);
    // Reset form fields if needed
    setRecipeName('');
    setImageFile(null);
    setMealTimes({
      breakfast: false,
      lunch: false,
      dinner: false,
      snack: false,
      dessert: false,
    });
    setPrepTime('');
    setCookTime('');
    setYields('');
    setDescription('');
  };

  //back btn function
  const handleBackBtnClick = () => {
    setShowBackBtn(false);
    setActiveComponent('Recipe');
};


  return (
    <form onSubmit={handleSubmit}>
      <div className='back-btn-form-container'>
        <BackBtn onBackButtonClick={handleBackBtnClick}></BackBtn>
      </div>

      <h1 className='page-title'>Create New Recipe</h1>
      
      <div className='recipe-name-container'>
        <label htmlFor='recipeName section' className='recipe-name-label title'>Recipe Name:</label>
        <input
            id='recipeName'
            name='recipeName'
            className='recipe-name-input'
            type="text"
            value={recipeName}
            onChange={handleNameChange}
            required
        />
      </div>
      <hr></hr>



      <div className='recipe-img-container'>
        <label htmlFor='recipeImg' className='recipe-img-label title'>Recipe Picture:</label>
        <img src='./images/recipes-icon/Cheeseburger.png' alt="burger" className='burger'></img>
        <div className="file-input-container">
          <img src='images/recipes-icon/upload.png' className='upload-icon'></img>
          <span className='title'>Upload Image </span>
          <input
              id='recipeImg'
              name='recipeImg'
              className='recipe-img-input'
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
          />
        </div>
      </div>
      <hr></hr>


      <div className='meal-time-selection-container'>
        <h3 className='title'>
          This recipe is for:
        </h3>
          <div className='checkboxes'>
            <div className='breakfast-container'>
              <input
                  id='breakfast'
                  className='breakfast'
                  type="checkbox"
                  name="breakfast"
                  checked={mealTimes.breakfast}
                  onChange={handleMealTimeChange}
              />
              <label htmlFor='breakfast' className='breakfast-label'>Breakfast</label> 
            </div>
            <div className='lunch-container'>
              <input
                id='lunch'
                className='lunch'
                type="checkbox"
                name="lunch"
                checked={mealTimes.lunch}
                onChange={handleMealTimeChange}
              />
              <label htmlFor='lunch' className='lunch-label'>Lunch</label>
            </div>
            <div className='dinner-container'>
              <input
                id='dinner'
                className='dinner'
                type="checkbox"
                name="dinner"
                checked={mealTimes.dinner}
                onChange={handleMealTimeChange}
                
              />
              <label htmlFor='dinner' className='dinner-label'>Dinner</label>

            </div>
            <div className='snack-container'>
              <input
                id='snack'
                className='snack'
                type="checkbox"
                name="snack"
                checked={mealTimes.snack}
                onChange={handleMealTimeChange}
              />
              <label htmlFor='snack' className='snack-label'>Snack</label>
            </div>
            <div className='dessert-container'>
                <input
                id="dessert"
                className='dessert'
                type="checkbox"
                name="dessert"
                checked={mealTimes.dessert}
                onChange={handleMealTimeChange}
                />
                <label htmlFor='dessert' className='dessert-label'>Dessert</label>
            </div>
          </div>
      </div>
      <hr></hr>

      <div className='recipe-info-container'>
        <h3 className='title'>About this Recipe:</h3>
        <div className='preptime-container'>
          <label htmlFor='prepTime'>Prep Time 
            <input
                type="text"
                className='preptime-input'
                id='prepTime'
                name='prepTime'
                value={prepTime}
                onChange={handlePrepTimeChange}
                required
            />
            minutes
          </label>    
        </div>

        <div className='cooktime-container'>
          <label htmlFor='cookTime' className='cookTime-label '>
            Cook Time
            <input
            className='cooktime-input'
            id='cookTime'
            name='cookTime'
              type="text"
              value={cookTime}
              onChange={handleCookTimeChange}
              required
            />
            minutes
          </label>
        </div>

        <div  className='yield-containter'>
          <label htmlFor='yields' className='yields-label'>
            Yields:
            <input
              name='yield'
              className='yield-input'
              id='yields'
              type="text"
              value={yields}
              onChange={handleYieldsChange}
              required
            />
            servings
          </label>
        </div>
        <hr></hr>
      </div>

      <div className='ingredients-container'>
          <label className='title'>Ingredients:</label>
          <hr></hr>

      </div>

      <div className='directions-container'>
        <label htmlFor='directions' className='directions-label title'>Directions:</label>
        <textarea
            name='directions'
            id='directions'
            className='directions'
            value={description}
            onChange={handleDescriptionChange}
            required
        />
        <hr></hr>
      </div>

      <div className='bottom-info'>
        <p className='title'>Based on your ingredients, their quantities and servings we estimate it's nutritional value :)</p>
      </div>

      <div className='nav-btn'>
        <button className='cancel-btn' onClick={handleBackBtnClick}>Cancel</button>

        <button type="submit" className='submit-btn'>Submit</button>


      </div>
      
      

      
    </form>
  );
}

export default CreateRecipe;
