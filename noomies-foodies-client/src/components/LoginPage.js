import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <>
        <div class="flex-container">
            <div class="flex-item">
                <img class="logo" src=""></img>
                <h1> Noomies Foodies</h1>
            </div>
            <div class="flex-item">
                <h1>Welcome Back!</h1>
                <p>Login and get started!</p>
                <LoginForm />
            </div>
        </div>
    </>
  );
};

export default LoginPage;
