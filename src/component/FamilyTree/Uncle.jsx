import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name={'Shohel'}></Cousin>
                <Cousin name={'Rupa'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;