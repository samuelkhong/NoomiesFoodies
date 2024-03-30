import React, { useState } from 'react';
import EmailInput from './InputField/EmailInput';
import PasswordInput from './InputField/PasswordInput'

const LoginForm  = () =>  {
    // State variables to store email and password input values 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

return (
    <div className='form-group'>
        <label htmlFor="email" className='form-label'>Email address</label>
        <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="password" className='form-label'>Password</label>
        <PasswordInput value={password} onChange={(event) => setPassword(event.target.value)} />
    </div>
)};
export default LoginForm;