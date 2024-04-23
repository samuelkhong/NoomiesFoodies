import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Button from './components/ListPage/buttons/button';
import SideBtn from './components/SideMenu/SideButton/SideButton';
import ListPage from './components/ListPage/ListPage';
import LoginPage from './components/LoginPage/LoginPage'
import Dashboard from './components/DashBoard/Dashboard.js'
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { useGetRecipesQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from './features/recipesApiSlice.js';
import RegistrationPage from './components/Registration/Registration.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Fridge from './components/TopMenu/Fridge-btn/Fridge-btn.js';


function App() {

  // const { data: recipes } = useGetRecipesQuery();

  // const [addRecipe] = useAddRecipeMutation()
  // const [updateRecipe] = useUpdateRecipeMutation()
  // const [deleteRecipe] = useDeleteRecipeMutation()






  return (
    <div className="App">



      <Router>
      {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Dashboard />}


      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
zzz

      </Routes>
    </Router>
      


    </div>
  );
}

export default App;
