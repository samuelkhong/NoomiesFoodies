import React, { useState } from 'react';
import EmailInput from '../LoginForm/InputField/EmailInput';
import PasswordInput from '../LoginForm/InputField/PasswordInput';
import SubmitButton from '../LoginForm/SubmitButton/SubmitButton';
import TextInput from '../LoginForm/InputField/TextInput';
import "./Registration.css"


const RegistrationPage = () => {

    // State variables to store email and password input values 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // event handler function to handle submit and send information to the backend
    const handleSubmit = (event) => {
        event.preventDefault(); // 
        //toDo
    }
  return (
    <>
        <div className="flex-container">
            <div className="background-left"></div>

            <div className="flex-item-left">
                <img className="logo" alt="logo"src="/images/Logo foodies.svg"></img>
                <img className="background-leaf" alt="leaf" src="/images/login-fruit.png"></img>
            </div>

            <div className="flex-item-right">
                <h1>Register <span className="clr-secondary">Now!</span></h1>
                <p>Sign up here!</p>
                
                <form className="form-group">
                    <div className="form-element">
                        <label htmlFor="email" className='form-label'>Email address</label>
                        <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                
                    <div className="form-element">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <PasswordInput value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className='form-element'>
                        <label htmlFor="confirm-password" className='form-label'>Confirm password</label>
                        <TextInput 
                            type="password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            placeholder="Confirm your password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                        />
                    </div>

                    <div className="form-element">
                        <SubmitButton onClick={handleSubmit} />
                    </div>
                </form>
                
                <p>Already have an account? <a href='#'>Sign in here!</a></p>
            </div>
        </div>
    </>
  );
};

export default RegistrationPage;
