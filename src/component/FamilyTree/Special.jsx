import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>Specian: {name}</h3>
            <h6>Asset: {asset}</h6>
            <h6>Asset: {newAsset}</h6>
        </div>
    );
};

export default Special;