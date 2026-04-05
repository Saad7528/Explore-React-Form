import React from 'react';

const FormAction = () => {
    const handaleFormAction = (formAction)=>{
        console.log(formAction.get('name'));
        console.log(formAction.get('email'));

    } 
    return (
        <div>
            <form action={handaleFormAction}>
                <br /><br />
                <input type="text" name='name' placeholder='Name' className='input' />
                <br /><br />
                <input type="email" name="email" placeholder='Email' className='input'/>
                <br />
                <input type="submit" value="Submit" className='btn' />
            </form>
            
        </div>
    );
};

export default FormAction;