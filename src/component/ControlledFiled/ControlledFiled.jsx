import React, { useState } from 'react';

const ControlledFiled = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit');
    }

    const handleOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be 6 or above character')
        }else{
            setError('')
        }
        
    }

    return (
        <div>
             <form onSubmit={handleSubmit} >
                <input placeholder='Enter Your Email' className='input' name='email' type="email" required />
                <br /> <br />
                <input placeholder='Enter Your Password' onChange={handleOnChange} defaultValue={password} className='input' name='password' type='password'  required/>
                <br />
                <input className='btn' name='Submit' type="submit" value="Submit"/>
            </form>
            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
            
        </div>
    );
};

export default ControlledFiled;