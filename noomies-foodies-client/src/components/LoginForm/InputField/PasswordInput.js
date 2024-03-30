const PasswordInput = ({ value, onChange }) => (
    <input
       type="password"
       name="password"
       value={value}
       onChange={onChange}
       className='form-control'
       placeholder='Enter your Password'
       id="password"
    />
   );

   export default PasswordInput;
   