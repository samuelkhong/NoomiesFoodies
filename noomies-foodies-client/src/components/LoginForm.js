import React, { useState } from 'react';

const LoginForm  = () =>  {
    // State variables to store email and password input values 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Set event Handlers that update state variables when input changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

return (
    <div className='form-group'>
          <label htmlFor="email" className='form-label fw-bold'>Email address</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className='form-control'
            placeholder='Enter Email'
            id="email"
          />

            <label htmlFor="password" className='form-label fw-bold'>Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className='form-control'
                placeholder='Enter Password'
                id="password"
            />
    </div>
)};
export default LoginForm;