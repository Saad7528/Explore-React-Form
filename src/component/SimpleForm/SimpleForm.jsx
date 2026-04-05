import React from 'react';
import { toast } from 'react-toastify';

const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submit Hoise");
        toast.success("Submit Success")
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input placeholder='Enter Your Name' className='input' name='name' type="text" />
                <br /> <br />
                <input placeholder='Enter Your Email' className='input' name='email' type="text" />
                <br />
                <input className='btn' name='Submit' type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default SimpleForm;