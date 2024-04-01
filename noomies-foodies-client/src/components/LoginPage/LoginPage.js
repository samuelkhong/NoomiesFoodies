import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
        <div class="flex-container">
            <div class="flex-item-left">
                <img class="logo" alt="logo"src="/images/Logo foodies.svg"></img>
            </div>
            <div class="flex-item-right">
                <h1>Welcome <span class="clr-secondary">Back!</span></h1>
                <p>Login and get started!</p>
                <LoginForm />
                <p>Don't have an account yet? <a href='#'>Sign up now!</a></p>
            </div>
        </div>
    </>
  );
};

export default LoginPage;
