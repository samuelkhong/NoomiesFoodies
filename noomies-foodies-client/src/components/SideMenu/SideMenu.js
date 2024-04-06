import React, { useState } from 'react';


const SideBar = () => {

    return (
        <div className='side-bar'>
            <div className='profile'>
                <img src="#" alt="user-icon"></img>
                <p>Welcome Back <span className='username'></span></p>
            </div>

            <ul className='menu'>
                <li><a href="#"><img src="#" alt="icon" ></img> Planner</a></li>
                <li><a href="#"><img src="#" alt="icon" ></img> My Profile</a></li>
                <li><a href="#"><img src="#" alt="icon" ></img> My Grocery List</a></li>
                <li><a href="#"><img src="#" alt="icon" ></img> My Recipes</a></li>
                <li><a href="#"><img src="#" alt="icon" ></img> Settings</a></li>
                <li><a href="#"><img src="#" alt="icon" ></img> Help</a></li>
            </ul>

            <img src="#" alt="logo" ></img>
        </div>

    );}

    export default SideBar;