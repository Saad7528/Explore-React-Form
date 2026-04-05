import React, { useRef } from 'react';

const UnControlledFiled = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={emailRef} placeholder='Enter Your Email' className='input' name='email' type="email" required />
                <br /> <br />
                <input ref={passwordRef} placeholder='Enter Your Password' className='input' name='password' type='password'  required/>
                <br />
                <input className='btn' name='Submit' type="submit" value="Submit"/>
            </form>
            {/* <p style={{color: "red"}}>
                <small>{error}</small>
            </p> */}
            
        </div>
    );
};

export default UnControlledFiled;