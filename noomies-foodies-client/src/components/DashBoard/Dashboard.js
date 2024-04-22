import React, {useState} from 'react';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';
import Planner from '../Planner/Planner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Dashboard.css'
//import more components here 
import ListPage from '../ListPage/ListPage';

const Dashboard = ({alertNum, emailNum}) => {

    return (
        <Router>
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <SideMenu username="sam" userProfile="" />
                </div>
                <div className='flex-item-right'>   
                    <TopMenu alertNum={alertNum} emailNum={emailNum} />
                    <Routes>
                        <Route
                            path="/planner"
                            element={<Planner />}
                        />
                        {/* Define other routes here */}
                        <Route
                            path="/grocery"
                            element={<ListPage />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;