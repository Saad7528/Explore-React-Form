import React from 'react';
import { toast } from 'react-toastify';

const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submit Hoise");
        toast.success("Submit Success")
        console.log(e);
    }

    return (
        <div>
            <form>
                <input placeholder='Enter Your Name' className='input' name='name' type="text" />
                <br /> <br />
                <input placeholder='Enter Your Name' className='input' name='name' type="text" />
                <br />
                <input onClick={handleSubmit} className='btn' name='Submit' type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default SimpleForm;