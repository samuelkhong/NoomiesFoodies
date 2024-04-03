import React, { useState } from 'react';
import EmailInput from './InputField/EmailInput';
import PasswordInput from './InputField/PasswordInput';
import SubmitButton from './SubmitButton/SubmitButton';

const LoginForm  = () =>  {
    // State variables to store email and password input values 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // event handler function to handle submit and send information to the backend
    const handleSubmit = (event) => {
        event.preventDefault(); // 
        //toDo
    }
// returns a form  that has password and email input and submission button. 
return (
    <>
        <form className='form-group'>
            <div className="form-element">
                <label htmlFor="email" className='form-label'>Email address</label>
                <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
                
            </div>
            
            <div className="form-element">
                <label htmlFor="password" className='form-label'>Password</label>
                <PasswordInput value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            <div className="form-element">
                <SubmitButton onClick={handleSubmit} />
            </div>

       

        </form>

    </>
)};
export default LoginForm;