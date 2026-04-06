import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>My Self</h3>
            <Special name={'Khalid'} asset={asset}></Special>
        </div>
    );
};

export default MySelf;