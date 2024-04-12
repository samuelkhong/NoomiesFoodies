import React, {useState} from 'react';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';
import './Dashboard.css'
//import more components here 


const Dashboard = () => {

    return (
        <div className='flex-container'>
            <div className='flex-item-left'>
                <SideMenu username="sam" userProfile=""></SideMenu>

            </div>
            <div className='flex-item-right'>   
                <TopMenu alertNum={3} emailNum={5}></TopMenu>
                {/* return the appropriate component based on the url*/ }
                <switch>
                    {/* add more routes and components here*/ }
                    {/* <Route path="" component={""}></Route> */}
                </switch>


            </div>
        </div>
    );
};
export default Dashboard;