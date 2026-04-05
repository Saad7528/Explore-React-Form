import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

     const handleSubmit = e => {
        e.preventDefault();
        console.log("submit", name, email, password);
        // setFieldValue(e.target.value);

    }
    return (
        <div>

            <form onSubmit={handleSubmit} >
                <input defaultValue={name} onChange={nameOnChange} type="text" className='input' />
                <br /><br />
                <input defaultValue={email} onChange={emailOnChange} type="email" className='input' />
                <br /><br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" className='input' />
                <br />

                <input className='btn' name='Submit' type="submit" value ="Submit"/>

                {/* <input ref={emailRef} placeholder='Enter Your Email' className='input' name='email' type="email" required />
                <br /> <br />
                <input ref={passwordRef} placeholder='Enter Your Password' className='input' name='password' type='password'  required/>
                <br /> */}
            </form>
            {/* <p style={{color: "red"}}>
                <small>{error}</small>
            </p> */}
            
            
        </div>
    );
};

export default HookForm;