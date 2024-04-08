import React, { useState } from 'react';

import './SideMenu.css'
import SideBtn from './SideButton/SideButton';


const SideMenu = ({username, userProfile}) => {
    // get the route of the current page using useLocation hook from React Router


    return (
        <div className='side-bar'>
            <div className='profile'>
                <img src={userProfile} alt="user-icon"></img>
                <p>Welcome Back <span className='username'>{username}</span>!</p>
            </div>

            <ul className='menu'>
                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/planner-white.png" 
                              iconUrlInactive="/images/side-bar-icons/planner-icon.png" 
                              alt="planner"
                              active={window.location.pathname === "/"} //TODO: add correct route. checks if the current route is the route for the button and sets active true
                        > Planner
                    </SideBtn>
                </li>

                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/profile-white.png" 
                              iconUrlInactive="/images/side-bar-icons/profile-icon.png" 
                              alt="profile"
                              active={window.location.pathname === "/"} //TODO: add correct route. checks if the current route is the route for the button and sets active true
                        > My Profile
                    </SideBtn>
                </li>

                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/gg_list-white.png" 
                              iconUrlInactive="/images/side-bar-icons/gg_list-icon.png" 
                              alt="grocery"
                              active={window.location.pathname === "/"} //TODO: add correct route.  if the current route is the route for the button and sets active class true
                        > My Grocery List
                    </SideBtn>
                </li>

                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/chef-white.png" 
                              iconUrlInactive="/images/side-bar-icons/recipes-icon.png" 
                              alt="recipes"
                              active={window.location.pathname === "/"} //TODO: add correct route.  if the current route is the route for the button and sets active class true
                        > My Recipes
                    </SideBtn>
                </li>

                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/settings-white.png" 
                              iconUrlInactive="/images/side-bar-icons/settings-icon.png" 
                              alt="settings"
                              active={window.location.pathname === "/"} //TODO: add correct route.  if the current route is the route for the button and sets active class true
                        > Settings
                    </SideBtn>
                </li>

                <li>
                    <SideBtn  menuLink="#" 
                              iconUrlActive="/images/side-bar-icons/help-white.png" 
                              iconUrlInactive="/images/side-bar-icons/help-icon.png" 
                              alt="help"
                              active={window.location.pathname === "/"} //TODO: add correct route.  if the current route is the route for the button and sets active class true
                        > Help
                    </SideBtn>
                </li>            
            </ul>

            <img className='side-bar-logo' src='/images/side-bar-icons/LOGO.png' alt="logo" ></img>
        </div>

    );}

    export default SideMenu;