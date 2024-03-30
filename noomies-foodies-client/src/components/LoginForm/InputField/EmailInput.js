const EmailInput = ({ value, onChange }) => (
    <input
       type="text"
       name="email"
       value={value}
       onChange={onChange}
       className='form-control'
       placeholder='Enter your email'
       id="email"
    />
   );

   export default EmailInput;