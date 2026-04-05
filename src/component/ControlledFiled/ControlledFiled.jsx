import React from 'react';

const ControlledFiled = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log();


    }
    return (
        <div>
             <form onSubmit={handleSubmit} >
                <input placeholder='Enter Your Email' className='input' name='email' type="email" required />
                <br /> <br />
                <input placeholder='Enter Your Password' className='input' name='password' type='password'  required/>
                <br />
                <input className='btn' name='Submit' type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default ControlledFiled;