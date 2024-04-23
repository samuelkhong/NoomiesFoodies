import React, {useState} from 'react';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';
import Planner from '../Planner/Planner';
import RecipeHome from '../Recipes/RecipeHome/RecipeHome.';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Dashboard.css'
//import more components here 
import ListPage from '../ListPage/ListPage';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../Registration/Registration';
import Fridge from '../Fridge/fridge';

const Dashboard = ({alertNum, emailNum}) => {

    return (
        
            <div className='flex-container-dash'>
                <div className='flex-item-left-dash'>
                    <SideMenu username="User" userProfile="./images/side-bar-icons/sample-headshot.png" />
                </div>
                <div className='flex-item-right-dash'>   
                    <TopMenu alertNum={1} emailNum={2} />
                    <Routes>
                       
                        <Route
                            path="/planner"
                            element={<Planner />}
                        />
                        <Route
                            path="/recipes"
                            element={<RecipeHome />}
                        />
                        {/* Define other routes here */}
                        <Route
                            path="/grocery"
                            element={<ListPage />}
                        />
                        <Route path="/fridge" 
                        element={<Fridge />} 
                        />

                    </Routes>
                </div>
            </div>
        
    );
};

export default Dashboard;